import { Badge } from '../../ui/Badge/Badge';
import Image from 'next/image';

interface WorkExperienceProps {
  company: string;
  companyLogo?: string;
  dateInfo: {
    start: Date;
    end: Date;
  };
  description: string;
  badges?: {
    name: string;
    link: string;
  }[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  companyLogo,
  dateInfo,
  description,
  badges,
}) => {
  return (
    <div className="grid gap-4 relative">
      <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex items-center gap-4 border-b p-6">
          <Image
            src={companyLogo ? `./${companyLogo}.png` : '/company.jpg'}
            width={48}
            height={48}
            alt={`${company} logo`}
            className="rounded-md"
            style={{ aspectRatio: '48/48', objectFit: 'cover' }}
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Front-end Developer</h3>
            <p className="text-sm text-muted-foreground">
              {company} <span className="text-muted-foreground">•</span>{' '}
              {`${new Date(dateInfo.start).toLocaleDateString()} - ${new Date(dateInfo.end).toLocaleDateString()}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {badges?.length && (
          <div className="flex items-center gap-2 border-t p-6">
            <div className="flex flex-wrap gap-2">
              {badges.map(({ name, link }) => (
                <Badge key={name} text={name} link={link} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
