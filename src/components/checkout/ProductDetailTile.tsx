import { FC } from "react";
import CheckoutListTile from "./CheckoutListTile";

const ProductDetailTile: FC = () => {
  return (
    <CheckoutListTile
      title={'div'}
      titleChildren={
        <>
          <h6 className="text-checkout-highlight">Asgaard Sofa</h6>
          <span>x</span>
          <span>1</span>
        </>
      }
      titleClassName="flex flex-row items-center gap-3"
      subtitle={'p'}
      subtitleChildren={`Rs. 250,000.00`}
    />
  );
}

export default ProductDetailTile;