'use client';

import { FC } from "react";
import { CarouselIndicator, CarouselLeftButton, CarouselRightButton, DisplayCarousel, DisplayCarouselFirstItem, DisplayCarouselItem, DisplayCarouselList } from "./DisplayCarousel";
import { Placeholder } from "@/components/common";
import ProductFirstItemDetail from "./ProductFirstItemDetail";

const ProductCarousel: FC = () => {
  const test = [1,2,3,4,5];

  return (
    <DisplayCarousel count={test.length}>
      <CarouselLeftButton />
      <CarouselIndicator />
      <DisplayCarouselList 
        data={test}
        renderFirstItem={(item => (
          <DisplayCarouselFirstItem 
            background={<Placeholder>{item}</Placeholder>}
            foreground={<ProductFirstItemDetail />}
          />
        ))}
        renderItems={(item) => (
          <DisplayCarouselItem key={item}>
            <Placeholder>{item}</Placeholder>
          </DisplayCarouselItem>
        )}
      />
      <CarouselRightButton />
    </DisplayCarousel>
  );
}

export default ProductCarousel;