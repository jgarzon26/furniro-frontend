'use client';

import { FC } from "react";
import CategoryListItem from "./CategoryListItem";
import { Carousel, CarouselLeftButton, CarouselRightButton } from "@/components/common/Carousel";
import CarouselList from "../common/Carousel/CarouselList";
import { Category } from "@/types/generated/graphql";

type Props = {
  categories: Category[];
}

const CategoryListView: FC<Props> = ({ categories }) => {
  return (
    <Carousel count={categories.length}>
      <CarouselLeftButton />
      <CarouselList 
        data={categories}
        renderItems={cat => (
          <CategoryListItem key={cat.slug} category={cat}/>
        )}
      />
      <CarouselRightButton />
    </Carousel>
  );
}

export default CategoryListView;