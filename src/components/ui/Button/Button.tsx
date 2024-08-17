import tw from 'tailwind-styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonComp = tw.button`bg-blue-500 text-white px-4 py-2 rounded`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonComp {...props}>{children}</ButtonComp>;
};
