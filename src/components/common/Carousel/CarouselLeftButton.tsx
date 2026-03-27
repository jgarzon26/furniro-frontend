'use client';

import { RiArrowLeftSLine } from "react-icons/ri";
import CarouselButton from "./CarouselButton";
import { Mode, useCarouselContext } from "./Carousel";
import { twJoin } from "tailwind-merge";
import { FC } from "react";

type Props = {
  disabledOnFirstIndex?: boolean;
  onClick?: () => void;
}

const CarouselLeftButton: FC<Props> = ({disabledOnFirstIndex, onClick}) => {
  const { changeIndex, index: currentIndex } = useCarouselContext();

  const classes = !disabledOnFirstIndex && (currentIndex > 0 ? "" : "opacity-0");

  return (
    <CarouselButton
      icon={RiArrowLeftSLine}
      disabled={!disabledOnFirstIndex && currentIndex <= 0}
      onClick={() => {
        if(!onClick) {
          changeIndex(Mode.decrement)
        } else {
          onClick();
        }
      }}
      className={twJoin("bg-transparent duration-150 disabled:cursor-auto", classes)}
    />
  );
}

export default CarouselLeftButton;