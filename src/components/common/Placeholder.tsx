import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const Placeholder: FC<Props> = ({className}) => {
  return <div className={twMerge('h-full w-full bg-gray-300', className)}/>;
}

export default Placeholder;