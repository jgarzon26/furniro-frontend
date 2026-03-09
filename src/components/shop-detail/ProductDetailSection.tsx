import { FC } from "react";
import ProductImagesDisplay from "./ProductImagesDisplay";

const ProductDetailSection: FC = () => {
  return (
    <section className="h-[70dvh] w-full flex flex-row justify-between gap-20">
      <ProductImagesDisplay />
      <section className="flex-1 "></section>
    </section>
  );
}

export default ProductDetailSection;