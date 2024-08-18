'use client';

import { Hero } from '@/components/Hero/Hero';
import {
  WorkExperience,
  WorkExperienceProps,
} from '@/components/WorkExperience/WorkExperience';
import { Collections } from '@/DTO/Collections';
import useReadDatabase from '@/hooks/useReadDatabase';
import { IconText } from '@/ui/IconText/IconText';
import { InfoCard } from '@/ui/InfoCard/InfoCard';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import tw from 'tailwind-styled-components';

interface SideProjects {
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
}

interface Education {
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
}

const SectionMain = tw.section`w-full flex flex-col space-y-24`;
const SectionContainer = tw.div`container grid gap-12 px-4 md:px-6`;
const SectionTitleContainer = tw.div`space-y-3`;
const SectionTitle = tw.h2`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center`;
const SectionDescription = tw.p`mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed`;

const MainPage: React.FC = () => {
  const workExperienceData = useReadDatabase<WorkExperienceProps>(
    Collections.work_experience,
  );

  const sideProjectsData = useReadDatabase<SideProjects>(
    Collections.side_projects,
  );

  const educationData = useReadDatabase<Education>(Collections.education);

  return (
    <SectionMain>
      <Hero
        description="I am a software engineer who loves to build web applications."
        joined={new Date()}
        location="Valencia"
        title="John Doe"
      />
      <SectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Education</SectionTitle>
          <SectionDescription>
            {`I have taken several courses on web development. Here are some of the courses I have taken.`}
          </SectionDescription>
        </SectionTitleContainer>
        <div className="grid grid-cols-3 gap-x-10">
          {educationData.map((education, index) => (
            <InfoCard key={index} {...education} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Work Experience</SectionTitle>
          <SectionDescription>
            {`I have worked in several companies as a front-end developer. Here are some of the projects I have worked on.`}
          </SectionDescription>
        </SectionTitleContainer>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20 grid gap-12">
          {workExperienceData.map((workExperience, index) => (
            <WorkExperience key={index} {...workExperience} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Side Projects</SectionTitle>
          <SectionDescription>
            {`I have worked on several side projects. Here are some of the projects I have worked on.`}
          </SectionDescription>
        </SectionTitleContainer>
        <div className="grid grid-cols-3 gap-x-10">
          {sideProjectsData.map((sideProject, index) => (
            <InfoCard key={index} {...sideProject} />
          ))}
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Skills</SectionTitle>
          <SectionDescription>
            {`I have worked on several side projects. Here are some of the projects I have worked on.`}
          </SectionDescription>
        </SectionTitleContainer>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
        </div>
      </SectionContainer>
      <SectionContainer>
        <SectionTitleContainer>
          <SectionTitle>Hobbies</SectionTitle>
          <SectionDescription>
            {`I have worked on several side projects. Here are some of the projects I have worked on.`}
          </SectionDescription>
        </SectionTitleContainer>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
          <IconText icon={ReactLogo} text="React" />
        </div>
      </SectionContainer>
    </SectionMain>
  );
};

export default MainPage;
