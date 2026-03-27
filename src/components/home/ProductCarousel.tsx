'use client';

import { FC } from "react";
import { DisplayCarouselFirstItem, DisplayCarouselItem, DisplayCarouselList } from "./DisplayCarousel";
import ProductFirstItemDetail from "./ProductFirstItemDetail";
import { GetRandomProductsQuery } from "@/types/generated/graphql";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Carousel, CarouselIndicator, CarouselLeftButton, CarouselRightButton } from "@/components/common/Carousel";

type Props = {
  query: GetRandomProductsQuery;
}

const ProductCarousel: FC<Props> = ({query}) => {
  const products = query.randomProducts;
  const { push } = useRouter();

  return (
    <Carousel count={products.length}>
      <CarouselLeftButton />
      <CarouselIndicator />
      <DisplayCarouselList 
        data={products}
        renderFirstItem={(({slug, title, images, category}) => (
          <DisplayCarouselFirstItem 
            background={<Image src={images[0] ?? ''} alt={title} fill/>}
            foreground={
              <ProductFirstItemDetail 
                title={title} 
                category={category.title}
                onClick={() => push(`/home/shop/${slug}`)}
              />
            }
          />
        ))}
        renderItems={({slug, title, images}) => (
          <DisplayCarouselItem key={slug}>
            <div className="relative h-full w-full">
              <Image src={images[0] ?? ''} alt={title} fill/>
            </div>
          </DisplayCarouselItem>
        )}
      />
      <CarouselRightButton />
    </Carousel>
  );
}

export default ProductCarousel;