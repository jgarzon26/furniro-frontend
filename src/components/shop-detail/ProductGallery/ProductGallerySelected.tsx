'use client';

import { FC } from "react";
import { useProductGalleryContext } from "./ProductGallery";
import Image from 'next/image';

const ProductGallerySelected: FC = () => {
  const { id } = useProductGalleryContext();

  return (
    <article className="flex-5 relative">
      <Image src={id} alt={`selected ${id}`} fill/>
    </article>
  );
}

export default ProductGallerySelected;