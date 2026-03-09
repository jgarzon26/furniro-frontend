'use client';

import { FC } from "react";
import { useProductGalleryContext } from "./ProductGallery";
import { Placeholder } from "@/components/common";

const ProductGallerySelected: FC = () => {
  const { id } = useProductGalleryContext();

  return (
    <article className="flex-5">
      <Placeholder>{id}</Placeholder>
    </article>
  );
}

export default ProductGallerySelected;