import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick?: () => void;
}

type TextProps = {
  className?: string;
}

const TextButton: FC<Props & PropsWithChildren> & {Text: FC<TextProps & PropsWithChildren>} = ({ className, onClick, children }) => {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={twMerge('bg-button-primary text-button-primary-foreground flex items-center justify-center px-15 py-5 hover:cursor-pointer', className)}
    >
      {children}
    </button>
  );
}

const Text: FC<TextProps & PropsWithChildren> = ({ children, className }) => {
  return <p className={twMerge("font-bold", className)}>{children}</p>;
}

TextButton.Text = Text;

export default TextButton;