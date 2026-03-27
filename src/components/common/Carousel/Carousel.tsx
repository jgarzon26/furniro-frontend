'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

export enum Mode {
  increment,
  decrement,
}

type Props = {
  count: number;
}

type CarouselContextType = {
  currentIndex: number;
  count: number;
  changeIndex: (mode: Mode) => void;
  setIndex: (index: number) => void;
}

const CarouselContext = createContext<CarouselContextType>({
  currentIndex: 0,
  count: 0,
  changeIndex() {},
  setIndex() {},
});

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);

  if(!context) {
    throw new Error('Display Carousel-related components must be wrapped');
  }

  return context;
}

const Carousel: FC<Props & PropsWithChildren> = ({count, children}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = (mode: Mode) => {
    if(mode === Mode.increment) {
      if(currentIndex + 1 >= count) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else if(mode === Mode.decrement) {
      if(currentIndex - 1 < 0) {
        setCurrentIndex(count - 1);
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    }
  }

  const setIndex = (index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), count));
  }

  const context: CarouselContextType = {
    currentIndex,
    count,
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