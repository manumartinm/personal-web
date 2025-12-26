import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="my-4">
        {`I'm Manuel, a Software Engineer at Tinybird with experience in Marketing, Development, Data Engineering, and Entrepreneurship since 2015. 
        I previously founded Keytrends, leading the Data & AI team, and worked as a consultant on various projects.`}
      </p>
      <p className="my-4">
        {`Currently pursuing dual Bachelor's degrees in Data Science (UPV Valencia) and Mathematics (VIU), 
        while conducting research in Drug Design & Genetics at VRAIN and advising startups at the intersection of AI and Marketing. 
        In my free time, I enjoy extreme sports (Muay Thai, BJJ, Powerlifting, Surf, Snowboard), cooking, reading about mathematics and physics, and learning languages, German and Russian are next!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
