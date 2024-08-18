import tw from 'tailwind-styled-components';

interface IconTextProps {
  icon: React.ElementType;
  text: string;
}

const IconTextContainer = tw.div`flex flex-col items-center gap-2 border border-muted p-4 rounded-lg`;
const IconWrapper = tw.div`bg-muted rounded-full w-16 h-16 flex items-center justify-center`;
const TextWrapper = tw.p`text-sm font-medium`;

export const IconText: React.FC<IconTextProps> = ({ icon: Icon, text }) => {
  return (
    <IconTextContainer>
      <IconWrapper>
        <Icon className="w-8 h-8 text-muted-foreground" />
      </IconWrapper>
      <TextWrapper>{text}</TextWrapper>
    </IconTextContainer>
  );
};
