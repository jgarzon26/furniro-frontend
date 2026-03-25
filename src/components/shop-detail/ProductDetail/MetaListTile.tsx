import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  className?: string;
  descClassName?: string;
}

const MetaListTile: FC<Props & PropsWithChildren> = ({title, className, descClassName, children}) => {
  return (
    <div className={twMerge("flex flex-row items-center *:text-shop-detail-highlight", className)}>
      <p className="flex-1">{title}</p>
      <p className="font-semibold">:</p>
      <div className={twMerge("ml-5 flex-4 flex flex-row items-center", descClassName)}>{children}</div>
    </div>
  );
}

export default MetaListTile;