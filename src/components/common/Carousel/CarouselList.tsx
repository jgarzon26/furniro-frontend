import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props<T> = {
  data: T[];
  className?: string;
  renderItems?: (item: T) => ReactNode;
}

const CarouselList = <T,>({ data, renderItems, className }: Props<T>) => {
  return (
    <ul className={twMerge('w-full flex flex-row justify-stretch items-center gap-5 overflow-x-auto overflow-y-hidden px-10 py-5', className)}>
      {data.map(item => renderItems?.(item))}
    </ul>
  );
}

export default CarouselList;