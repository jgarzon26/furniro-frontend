import { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

const CarouselButton: FC<ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconType }> = ({icon: Icon, className, ...props}) => {
  return (
    <button {...props} className={twMerge("flex items-center justify-center rounded-3xl bg-primary-foreground text-primary hover:cursor-pointer", className)}>
      <Icon size={48} className="p-2"/>
    </button>
  );
}

export default CarouselButton;