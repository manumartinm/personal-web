import Link from 'next/link';
import tw from 'tailwind-styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  link?: string;
}

const ButtonComp = tw.button`bg-blue-500 text-white px-4 py-2 rounded`;

export const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <ButtonComp>
      {link ? <Link href={link}>{children}</Link> : children}
    </ButtonComp>
  );
};
