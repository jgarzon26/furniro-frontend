'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

export enum Mode {
  increment,
  decrement,
}

type Props = {
  count: number;
  itemsPerView?: number;
}

type CarouselState = {
  index: number;
  itemsPerView: number;
}

type CarouselActions = {
  changeIndex: (mode: Mode) => void;
  setIndex: (index: number) => void;
}

type CarouselContextType = CarouselState & CarouselActions;

const initState: CarouselState = {
  index: 0,
  itemsPerView: 1,
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('Display Carousel-related components must be wrapped');
  }

  return context;
}

const Carousel: FC<Props & PropsWithChildren> = ({ count, itemsPerView, children }) => {
  const [carousel, setCarousel] = useState<CarouselState>({
    ...initState,
    itemsPerView: itemsPerView ?? initState.itemsPerView,
  });

  const changeIndex = (mode: Mode) => {
    const { index: currentIndex } = carousel;
    if (mode === Mode.increment) {
      if (currentIndex + 1 >= count) {
        setCarousel(prev => ({ ...prev, index: 0 }));
      } else {
        setCarousel(prev => ({ ...prev, index: prev.index + prev.itemsPerView}));
      }
    } else if (mode === Mode.decrement) {
      if (currentIndex - 1 < 0) {
        setCarousel(prev => ({ ...prev, index: count - 1 }));
      } else {
        setCarousel(prev => ({ ...prev, index: prev.index - prev.itemsPerView}));
      }
    }
  }

  const setIndex = (index: number) => {
    const snappedIndex = Math.floor(index / carousel.itemsPerView) * carousel.itemsPerView;
    setCarousel(prev => ({ ...prev, index: Math.min(snappedIndex, Math.max(0, count - carousel.itemsPerView)), }));
  }

  const context: CarouselContextType = {
    ...carousel,
    changeIndex,
    setIndex,
  };

  return (
    <CarouselContext value={context}>
      <div className="flex flex-row items-center relative">
        {children}
      </div>
    </CarouselContext>
  );
}

export default Carousel;