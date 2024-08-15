import tw from 'tailwind-styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label: string;
}

const ButtonComp = tw.button`bg-blue-500 text-white px-4 py-2 rounded`;

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ButtonComp {...props}>{label}</ButtonComp>;
};
