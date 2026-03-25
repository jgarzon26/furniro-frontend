'use client';

import { FC } from "react";
import { useProductGalleryContext } from "./ProductGallery";
import Image from 'next/image';

type Props = {
  item: string;
}

const ProductGalleryItem: FC<Props> = ({ item }) => {
  const { id, setId } = useProductGalleryContext();

  const onClickHandle = () => {
    if (item === id) {
      return;
    }

    setId(item);
  }

  //? id is temporary. Use Image Comp when using api
  return (
    <div className="h-full w-full rounded-[10px] relative" onClick={onClickHandle}>
      <Image src={item} alt={item} fill/>
    </div>
  );
}

export default ProductGalleryItem;