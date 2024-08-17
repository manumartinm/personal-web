import Link from 'next/link';
import { Button } from '../Button/Button';

interface InfoCardProps {
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className="rounded-lg border bg-background p-6 shadow-sm">
      <h3 className="text-xl font-semibold">
        <Link href={link.href} className="hover:underline" prefetch={false}>
          {title}
        </Link>
      </h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="mt-4">
        <Button link={link.href}>{link.label}</Button>
      </div>
    </div>
  );
};
