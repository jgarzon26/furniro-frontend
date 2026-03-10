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
        <article>
          <h2 className="font-normal text-[42px]">Product Title</h2>
          <h4 className="font-medium text-shop-detail-highlight">Rs. 250,000.00</h4>
        </article>
    </section>
  );
}

export default ProductDetailSection;