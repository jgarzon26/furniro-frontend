import { FC } from "react";
import { ProductGallery, ProductGalleryList, ProductGallerySelected } from "./ProductGallery";

const ProductDetailSection: FC = () => {
  const testids = ['1','2','3','4','5'];

  return (
    <section className="h-[70dvh] w-full flex flex-row justify-between gap-20">
      <ProductGallery items={testids} className="flex flex-1 flex-row gap-10">
        <ProductGalleryList />
        <ProductGallerySelected />
      </ProductGallery>
      <section className="flex-1 "></section>
    </section>
  );
}

export default ProductDetailSection;