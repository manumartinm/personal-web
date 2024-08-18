import Link from 'next/link';
import Image from 'next/image';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { CalendarDays } from '@styled-icons/fa-solid/CalendarDays';
import { Location } from '@styled-icons/entypo/Location';
import { Button } from '../../ui/Button/Button';
import tw from 'tailwind-styled-components';

interface HeroProps {
  description: string;
  location: string;
  joined: Date;
  title: string;
}

const HeroContainer = tw.div`container grid gap-8 md:grid-cols-2 md:gap-16`;
const HeroImageContainer = tw.div`rounded-full overflow-hidden aspect-square w-full max-w-[300px] mx-auto`;
const HeroContent = tw.div`space-y-4`;
const HeroTitle = tw.h1`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl`;
const HeroDescription = tw.p`text-muted-foreground md:text-xl`;
const HeroLinksContainer = tw.div`flex items-center gap-4`;
const HeroInfoContainer = tw.div`grid gap-2`;
const HeroInfoSection = tw.div`flex items-center gap-2`;
const HeroInfoText = tw.span`text-muted-foreground`;
const TwitterIcon = tw(
  Twitter,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;
const LinkedinIcon = tw(
  LinkedinSquare,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;
const GithubIcon = tw(
  Github,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;
const InstagramIcon = tw(
  Instagram,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;
const LocationIcon = tw(
  Location,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;
const CalendarDaysIcon = tw(
  CalendarDays,
)`w-6 h-6 text-muted-foreground hover:text-primary transition-colors`;

export const Hero: React.FC<HeroProps> = ({
  description,
  title,
  location,
  joined,
}) => {
  return (
    <HeroContainer>
      <HeroImageContainer>
        <Image
          src="/perfil.jpg"
          width="200"
          height="200"
          alt="Profile"
          className="w-full h-full object-cover"
          style={{ aspectRatio: '200/200', objectFit: 'cover' }}
        />
      </HeroImageContainer>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
        <HeroLinksContainer>
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <TwitterIcon />
          </Link>
          <Link href="#" aria-label="LinkedIn" prefetch={false}>
            <LinkedinIcon />
          </Link>
          <Link href="#" aria-label="GitHub" prefetch={false}>
            <GithubIcon />
          </Link>
          <Link href="#" aria-label="Instagram" prefetch={false}>
            <InstagramIcon />
          </Link>
        </HeroLinksContainer>
        <HeroInfoContainer>
          <HeroInfoSection>
            <CalendarDaysIcon />
            <HeroInfoText>
              {`Joined on ${new Date(joined).toLocaleDateString()}`}
            </HeroInfoText>
          </HeroInfoSection>
          <HeroInfoSection>
            <LocationIcon />
            <HeroInfoText>Based in {location}</HeroInfoText>
          </HeroInfoSection>
        </HeroInfoContainer>
        <Button>Hire Me</Button>
      </HeroContent>
    </HeroContainer>
  );
};
