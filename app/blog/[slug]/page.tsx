import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";

type TocItem = { level: 2 | 3 | 4; text: string; slug: string };

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function getTableOfContents(mdxSource: string): TocItem[] {
  let inCodeFence = false;
  let items: TocItem[] = [];

  for (let rawLine of mdxSource.split("\n")) {
    let line = rawLine.trimEnd();

    // Skip fenced code blocks
    if (line.trimStart().startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }
    if (inCodeFence) continue;

    let match = /^(#{2,4})\s+(.+?)\s*$/.exec(line);
    if (!match) continue;

    let level = match[1].length as 2 | 3 | 4;
    let text = match[2]
      .replace(/\s+#+\s*$/, "") // strip trailing ### in headings like "Title ###"
      .trim();
    if (!text) continue;

    items.push({ level, text, slug: slugify(text) });
  }

  return items;
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const toc = getTableOfContents(post.content);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      {toc.length > 0 && (
        <nav aria-label="Table of contents" className="mt-4 mb-8">
          <p className="text-sm font-medium text-neutral-900">On this page</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            {toc.map((item) => (
              <li
                key={`${item.level}-${item.slug}`}
                className={
                  item.level === 2 ? "" : item.level === 3 ? "pl-4" : "pl-8"
                }
              >
                <a className="hover:underline" href={`#${item.slug}`}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose max-w-none prose-p:leading-7 prose-li:leading-7">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
