import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const DisplayCarouselItem: FC<Props & PropsWithChildren> = ({className, children}) => {
  //? This is only tmeporary. Add Image when using api

  return (
    <li className={twMerge("h-10/12 aspect-2/3", className)}>
      {children}
    </li>
  );
}

export default DisplayCarouselItem;