import { FC } from "react";
import { ProductGallery, ProductGalleryList, ProductGallerySelected } from "./ProductGallery";
import { Rating } from "@/components/common";
import { ColorSelection, ProductMetaDetails, ShopActions, SizeSelection } from "./ProductDetail";

type Props = {
  slug: string;
}

const ProductDetailSection: FC<Props> = ({slug}) => {
  const testids = ['1','2','3','4','5'];

  return (
    <section className="h-[75dvh] w-full flex flex-row justify-between gap-20">
      <ProductGallery items={testids} className="flex flex-1 flex-row gap-10 h-9/12">
        <ProductGalleryList />
        <ProductGallerySelected />
      </ProductGallery>
      <section className="flex flex-col flex-2 gap-5">
        <article>
          <h2 className="font-normal text-[42px]">Product Title</h2>
          <h4 className="font-medium text-shop-detail-highlight">Rs. 250,000.00</h4>
        </article>
        <article className="flex flex-row items-center gap-3">
          <Rating count={4.5}/>
          <p className="text-shop-detail-highlight text-[13px] border-l border-l-shop-detail-divider px-5">5 Customer Review</p>
        </article>
        <article className="w-2/3 flex-1">
          <p>Short description</p>
        </article>
        <SizeSelection />
        <ColorSelection />
        <ShopActions />
        <ProductMetaDetails />
      </section>
    </section>
  );
}

export default ProductDetailSection;