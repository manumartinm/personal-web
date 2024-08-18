import Link from 'next/link';
import { Button } from '../Button/Button';
import tw from 'tailwind-styled-components';

interface InfoCardProps {
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
}

const CardContainer = tw.div`rounded-lg border bg-background p-6 shadow-sm`;
const CardTitle = tw.h3`text-xl font-semibold`;
const TitleLink = tw(Link)`hover:underline`;
const CardDescription = tw.p`mt-2 text-muted-foreground`;
const CardButton = tw(Button)`mt-4`;

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <CardContainer>
      <CardTitle>
        {link ? (
          <TitleLink href={link.href} prefetch={false}>
            {title}
          </TitleLink>
        ) : (
          title
        )}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      {link && (
        <CardButton link={link.href}>
          {link.label}
        </CardButton>
      )}
    </CardContainer>
  );
};
