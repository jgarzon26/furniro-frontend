'use client';

import { ReactNode } from "react";
import { useCarouselContext } from "./DisplayCarousel";

type Props<T> = {
  data: readonly T[];
  renderFirstItem: (item: T) => ReactNode;
  renderItems: (item: T) => ReactNode;
};

const DisplayCarouselList = <T,>({data, renderFirstItem, renderItems}: Props<T>) => {
  const { currentIndex } = useCarouselContext();
  const render = [...data.slice(currentIndex + 1)];

  return (
    <ul className="h-120 w-full flex flex-row gap-5">
      {renderFirstItem(data[currentIndex])}
      {
        render.map((item) => {
          return renderItems(item);
        })
      }
    </ul>
  );
}

export default DisplayCarouselList;