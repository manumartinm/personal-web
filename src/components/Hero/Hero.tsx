import Link from 'next/link';
import Image from 'next/image';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { CalendarDays } from '@styled-icons/fa-solid/CalendarDays';
import { Location } from '@styled-icons/entypo/Location';
import { Button } from '../ui/Button/Button';

interface HeroProps {
  description: string;
  location: string;
  joined: Date;
  title: string;
}

export const Hero: React.FC<HeroProps> = ({
  description,
  title,
  location,
  joined,
}) => {
  return (
    <section className="w-full">
      <div className="container grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="rounded-full overflow-hidden aspect-square w-full max-w-[300px] mx-auto">
          <Image
            src="/perfil.jpg"
            width="200"
            height="200"
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ aspectRatio: '200/200', objectFit: 'cover' }}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-muted-foreground md:text-xl">{description}</p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <LinkedinSquare className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub" prefetch={false}>
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {`Joined on ${new Date(joined).toLocaleDateString()}`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Location className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Based in {location}</span>
            </div>
          </div>
          <Button>Hire Me</Button>
        </div>
      </div>
    </section>
  );
};
