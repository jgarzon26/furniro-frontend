import { ButtonHTMLAttributes, FC } from "react";

const ActionButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button {...props} type="button" className="border rounded-[50px] px-6 py-1 hover:cursor-pointer">{children}</button>
  );
}

export default ActionButton;