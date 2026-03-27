'use client';

import { RiArrowRightSLine } from "react-icons/ri";
import CarouselButton from "./CarouselButton";
import { Mode, useCarouselContext } from "./Carousel";
import { FC } from "react";

const CarouselRightButton: FC = () => {
  const { changeIndex } = useCarouselContext();

  return (
    <CarouselButton
      icon={RiArrowRightSLine}
      onClick={() => changeIndex(Mode.increment)}
      className="absolute z-10 right-10 shadow-lg"
    />
  );
}

export default CarouselRightButton;