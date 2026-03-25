import { FC } from "react";
import { ColorSelection, ProductMetaDetails, ShopActions, SizeSelection } from "./ProductDetail";
import BasicInfo from "./ProductDetail/BasicInfo";
import ProductGallerySection from "./ProductDetail/ProductGallerySection";

const ProductDetailSection: FC = () => {
  return (
    <section className="h-[75dvh] w-full flex flex-row justify-between gap-20">
      <ProductGallerySection />
      <section className="flex flex-col flex-2 gap-5">
        <BasicInfo />
        <SizeSelection />
        <ColorSelection />
        <ShopActions />
        <ProductMetaDetails />
      </section>
    </section>
  );
}

export default ProductDetailSection;