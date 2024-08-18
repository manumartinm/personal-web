import { Badge } from '../../ui/Badge/Badge';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

export interface WorkExperienceProps {
  company: string;
  companyLogo?: string;
  startDate: string;
  endDate: string;
  description: string;
  badges?: {
    name: string;
    link: string;
  }[];
}
const WorkExperienceContainer = tw.div`grid gap-4 relative`;
const TimelineDot = tw.div`aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1`;
const ExperienceCard = tw.div`relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl`;
const CardHeader = tw.div`flex items-center gap-4 border-b p-6`;
const CompanyLogo = tw(Image)`rounded-md`;
const HeaderContent = tw.div`flex-1`;
const JobTitle = tw.h3`text-lg font-semibold`;
const CompanyInfo = tw.p`text-sm text-muted-foreground`;
const JobDescription = tw.div`flex items-center gap-4 p-6`;
const DescriptionText = tw.p`text-sm text-muted-foreground`;
const BadgesSection = tw.div`flex items-center gap-2 border-t p-6`;
const BadgesWrapper = tw.div`flex flex-wrap gap-2`;

export const WorkExperience: React.FC<WorkExperienceProps> = ({
  company,
  companyLogo,
  startDate,
  endDate,
  description,
  badges,
}) => {
  return (
    <WorkExperienceContainer>
      <TimelineDot />
      <ExperienceCard>
        <CardHeader>
          <CompanyLogo
            src={companyLogo ? `./${companyLogo}.png` : '/company.jpg'}
            width={48}
            height={48}
            alt={`${company} logo`}
            style={{ aspectRatio: '48/48', objectFit: 'cover' }}
          />
          <HeaderContent>
            <JobTitle>Front-end Developer</JobTitle>
            <CompanyInfo>
              {company} <span>•</span>{' '}
              {`${new Date(startDate).toLocaleDateString()} - ${new Date(endDate).toLocaleDateString()}`}
            </CompanyInfo>
          </HeaderContent>
        </CardHeader>
        <JobDescription>
          <DescriptionText>{description}</DescriptionText>
        </JobDescription>
        {badges?.length && (
          <BadgesSection>
            <BadgesWrapper>
              {badges.map(({ name, link }) => (
                <Badge key={name} text={name} link={link} />
              ))}
            </BadgesWrapper>
          </BadgesSection>
        )}
      </ExperienceCard>
    </WorkExperienceContainer>
  );
};
