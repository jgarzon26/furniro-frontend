'use client';

import { useCarouselContext } from "./Carousel";
import { FaCircle } from "react-icons/fa6";
import { CgRadioChecked } from "react-icons/cg";
import { FC } from "react";

const CarouselIndicator: FC = () => {
  const { index: currentIndex, count, setIndex } = useCarouselContext();

  return (
    <ul className="flex flex-row items-center gap-3 absolute z-10 h-1/8 w-1/4 bottom-5 left-100">
      {
        Array.from({ length: count }).map((_, index) => (
          <li key={index}>
            {
              currentIndex === index
                ? <CgRadioChecked size={20} className="text-display-carousel-radio" />
                : (
                  <button
                    type="button"
                    className="text-display-carousel-radio-off flex items-center justify-center h-2 w-2 hover:cursor-pointer"
                    onClick={() => setIndex(index)}
                  >
                    <FaCircle />
                  </button>
                )
            }
          </li>
        ))
      }
    </ul>
  );
}

export default CarouselIndicator;