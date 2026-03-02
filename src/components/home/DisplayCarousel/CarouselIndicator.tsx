'use client';

import { useCarouselContext } from "./DisplayCarousel";
import { FaCircle } from "react-icons/fa6";
import { CgRadioChecked } from "react-icons/cg";

const CarouselIndicator = () => {
  const { currentIndex, length } = useCarouselContext();

  return (
    <ul className="flex flex-row items-center gap-3 absolute z-10 h-1/8 w-1/4 bottom-5 left-100">
      {
        Array.from({length}).map((_, index) => (
          <li key={index}>
            {
              currentIndex === index 
              ? <CgRadioChecked size={20} className="text-display-carousel-radio" /> 
              : <FaCircle size={8} className="text-display-carousel-radio-off" />
            }
          </li>
        ))
      }
    </ul>
  );
}

export default CarouselIndicator;