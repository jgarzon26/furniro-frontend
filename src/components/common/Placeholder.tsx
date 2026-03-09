import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const Placeholder: FC<Props & PropsWithChildren> = ({className, children}) => {
  return <div className={twMerge('h-full w-full bg-gray-300 flex items-center justify-center', className)}>{children}</div>;
}

export default Placeholder;