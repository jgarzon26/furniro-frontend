'use client';

import { FC } from "react";
import { Carousel, CarouselLeftButton, Carousellist, CarouselRightButton } from "@/components/common/Carousel";
import { CardItem } from "@/components/common";
import { GetRelatedProductsQuery } from "@/types/generated/graphql";

type Props = {
  data: GetRelatedProductsQuery;
};

const RelatedProductsList: FC<Props> = ({data}) => {
  const { relatedProducts } = data;

  return (
    <Carousel count={relatedProducts.length} itemsPerView={4}>
      <CarouselLeftButton />
      <Carousellist 
        data={relatedProducts}
        renderItems={(item) => (
          <CardItem key={item.slug} product={item} className="shrink-0"/>
        )}
      />
      <CarouselRightButton />
    </Carousel>
  );
}

export default RelatedProductsList;