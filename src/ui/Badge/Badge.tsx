import Link from 'next/link';
import React from 'react';
import tw from 'tailwind-styled-components';

interface BadgeProps {
  text: string;
  link?: string;
}

const BadgeContainer = tw.div`bg-blue-500 text-white px-4 py-2 rounded`;

export const Badge: React.FC<BadgeProps> = ({ text, link }) => {
  return (
    <BadgeContainer>
      {link ? <Link href={link}>{text}</Link> : text}
    </BadgeContainer>
  );
};
