'use client';

import { FC } from "react";
import { useProductGalleryContext } from "./ProductGallery";
import { Placeholder } from "@/components/common";

type Props = {
  id: string;
}

const ProductGalleryItem: FC<Props> = ({id}) => {
  const { id: pid, setId } = useProductGalleryContext();

  const onClickHandle = () => {
    if(id === pid) {
      return;
    }

    setId(id);
  }

  //? id is temporary. Use Image Comp when using api
  return (
    <div className="h-full w-full rounded-[10px]" onClick={onClickHandle}>
      <Placeholder>{id}</Placeholder>
    </div>
  );
}

export default ProductGalleryItem;