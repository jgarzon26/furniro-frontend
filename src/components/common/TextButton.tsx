import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick?: () => void;
}

const TextButton: FC<Props & PropsWithChildren> = ({ className, onClick, children }) => {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={twMerge('bg-button-primary text-button-primary-foreground flex items-center justify-center px-15 py-5', className)}
    >
      {children}
    </button>
  );
}

export default TextButton;