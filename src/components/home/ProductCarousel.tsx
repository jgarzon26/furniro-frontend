'use client';

import { FC } from "react";
import { CarouselIndicator, CarouselLeftButton, CarouselRightButton, DisplayCarousel, DisplayCarouselFirstItem, DisplayCarouselItem, DisplayCarouselList } from "./DisplayCarousel";
import ProductFirstItemDetail from "./ProductFirstItemDetail";
import { GetRandomProductsQuery } from "@/types/generated/graphql";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  query: GetRandomProductsQuery;
}

const ProductCarousel: FC<Props> = ({query}) => {
  const products = query.randomProducts;
  const { push } = useRouter();

  return (
    <DisplayCarousel count={products.length}>
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
    </DisplayCarousel>
  );
}

export default ProductCarousel;