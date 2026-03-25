'use client';

import { FC } from "react";
import { ProductGallery, ProductGalleryList, ProductGallerySelected } from "../ProductGallery";
import useShopDetailQuery from "@/hooks/useShopDetailQuery";

const ProductGallerySection: FC = () => {
  const { images } = useShopDetailQuery();

  return (
    <ProductGallery items={images as string[]} className="flex flex-1 flex-row gap-10 h-9/12">
      <ProductGalleryList />
      <ProductGallerySelected />
    </ProductGallery>
  );
}

export default ProductGallerySection;