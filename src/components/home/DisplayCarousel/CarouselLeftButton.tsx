'use client';

import { RiArrowLeftSLine } from "react-icons/ri";
import CarouselButton from "./CarouselButton";
import { Mode, useCarouselContext } from "./DisplayCarousel";
import { twJoin } from "tailwind-merge";

const CarouselLeftButton = () => {
  const { changeIndex, currentIndex } = useCarouselContext();

  const classes = currentIndex > 0 ? "" : "opacity-0";

  return (
    <CarouselButton 
      icon={RiArrowLeftSLine} 
      disabled={currentIndex <= 0}
      onClick={() => changeIndex(Mode.decrement)} 
      className={twJoin("bg-transparent duration-150 disabled:cursor-auto", classes)}
    />
  );
}

export default CarouselLeftButton;