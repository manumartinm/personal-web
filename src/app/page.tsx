'use client';

import { Hero } from '@/components/Hero/Hero';
import { WorkExperience } from '@/components/WorkExperience/WorkExperience';

// Mini descripcion de que hago + enlaces a RRSS
// heading de Educacion con enlaces a los cursos
// heading de Experiencia con enlaces a los proyectos
// heading de Skills con enlaces a los proyectos
// heading de Contacto con enlaces a los proyectos
// Heading de hobbies con enlaces a los proyectos

const MainPage = () => {
  return (
    <main className="w-full flex flex-col space-y-12">
      <Hero
        description="I am a software engineer who loves to build web applications."
        joined={new Date()}
        location="Valencia"
        title="John Doe"
      />
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Work Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {`I have worked in several companies as a front-end developer. Here are some of the projects I have worked on.`}
          </p>
        </div>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20 grid gap-12">
          <WorkExperience
            company="Company A"
            dateInfo={{
              start: new Date(),
              end: new Date(),
            }}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            badges={[
              {
                name: 'React',
                link: '#',
              },
              {
                name: 'TypeScript',
                link: '#',
              },
            ]}
          />
          <WorkExperience
            company="Company A"
            dateInfo={{
              start: new Date(),
              end: new Date(),
            }}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            badges={[
              {
                name: 'React',
                link: '#',
              },
              {
                name: 'TypeScript',
                link: '#',
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
