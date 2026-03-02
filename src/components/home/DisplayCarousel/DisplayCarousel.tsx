'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

const LENGTH = 8;

export enum Mode {
  increment,
  decrement,
}

type CarouselContextType = {
  currentIndex: number;
  length: number;
  changeIndex: (mode: Mode) => void;
}

const CarouselContext = createContext<CarouselContextType>({
  currentIndex: 0,
  length: 0,
  changeIndex() {},
});

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if(!context) {
    throw new Error('Display Carousel-related components must be wrapped');
  }

  return context;
}

const DisplayCarousel: FC<PropsWithChildren> = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = (mode: Mode) => {
    if(mode === Mode.increment) {
      if(currentIndex + 1 >= LENGTH) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else if(mode === Mode.decrement) {
      if(currentIndex - 1 < 0) {
        setCurrentIndex(LENGTH - 1);
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    }
  }

  const context: CarouselContextType = {
    currentIndex,
    changeIndex,
    length: LENGTH,
  };

  return (
    <CarouselContext value={context}>
      <div className="flex flex-row items-center relative">
        {children}
      </div>
    </CarouselContext>
  );
}

export default DisplayCarousel;