'use client';

import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

type ProductGalleryType = {
  id: string;
  items: readonly string[];
}

type ProductGalleryAction = {
  setId: (id: string) => void;
}

type ProductGalleryApi = ProductGalleryType & ProductGalleryAction;

const ProductGalleryContext = createContext<ProductGalleryApi | undefined>(undefined);

export const useProductGalleryContext = () => {
  const context = useContext(ProductGalleryContext);

  if(!context) {
    throw new Error('useProductGallery must be used within ProductGallery');
  }

  return context;
}

type Props = {
  className?: string;
  items: readonly string[];
}

const ProductGallery: FC<Props & PropsWithChildren> = ({className, items, children}) => {
  const [gallery, setGallery] = useState<ProductGalleryType>({
    id: items[0],
    items,
  });

  const context: ProductGalleryApi = {
    ...gallery,
    setId: (id) => setGallery(prev => ({...prev, id})),
  } 

  return (
    <ProductGalleryContext value={context}>
      <section className={className}>
        {children}
      </section>
    </ProductGalleryContext>
  );
}

export default ProductGallery;