'use client';

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useCarouselContext } from "./Carousel";

type Props<T> = {
  data: T[];
  className?: string;
  renderItems?: (item: T) => ReactNode;
}

const CarouselList = <T,>({ data, renderItems, className }: Props<T>) => {
  const { itemsPerView, index } = useCarouselContext();
  const startIndex = index;
  const endIndex = Math.min(startIndex + itemsPerView, data.length)
  const visibleData = data.slice(startIndex, endIndex);

  return (
    <ul 
      className={twMerge('w-full flex flex-row justify-stretch items-center gap-5 overflow-hidden px-10 py-5', className)}
      style={{ width: `${(itemsPerView * 100)}%` }}
    >
      {visibleData.map(item => renderItems?.(item))}
    </ul>
  );
}

export default CarouselList;