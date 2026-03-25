'use client';

import { FC } from "react";
import { useProductGalleryContext } from "./ProductGallery";
import ProductGalleryItem from "./ProductGalleryItem";

const ProductGalleryList: FC = () => {
  const { items, id } = useProductGalleryContext();

  const images = items.filter((item) => item != id);

  return (
    <article className="flex flex-1 flex-col gap-10 mb-20">
      {
        images.map(item => <ProductGalleryItem key={item} item={item} />)
      }
    </article>
  );
}

export default ProductGalleryList;