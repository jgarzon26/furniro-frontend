'use client';

import { RiArrowRightSLine } from "react-icons/ri";
import CarouselButton from "./CarouselButton";
import { Mode, useCarouselContext } from "./Carousel";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  onClick?: () => void;
}

const CarouselRightButton: FC<Props> = ({className, onClick}) => {
  const { changeIndex } = useCarouselContext();

  return (
    <CarouselButton
      icon={RiArrowRightSLine}
      onClick={() => {
        if(!onClick) {
          changeIndex(Mode.increment);
        } else {
          onClick();
        }
      }}
      className={twMerge("absolute z-10 right-10 shadow-lg", className)}
    />
  );
}

export default CarouselRightButton;