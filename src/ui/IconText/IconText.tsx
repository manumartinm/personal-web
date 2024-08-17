interface IconTextProps {
  icon: React.ElementType;
  text: string;
}

export const IconText: React.FC<IconTextProps> = ({ icon: Icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 border border-muted p-4 rounded-lg">
      <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};
