type Props = {
  text?: string;
  className?: string;
};

export const Button = ({ text, className }: Props) => {
  return <div className={`${className} cursor-pointer`}>{text}</div>;
};
