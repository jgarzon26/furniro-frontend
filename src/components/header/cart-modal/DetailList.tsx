import { FC } from "react";
import DetailListTile from "./DetailListTile";
import { CartShortFragment } from "@/types/generated/graphql";

type Props = {
  cart: CartShortFragment;
}

const DetailList: FC<Props> = ({ cart }) => {
  return (
    <>
      <ul className="flex flex-1 flex-col gap-1 overflow-y-auto pb-5">
        {
          cart.items.map(item => <DetailListTile key={item.product.sku} item={item}/>)
        }
      </ul>
      <div className="flex flex-row items-center justify-between">
        <h5 className="font-medium">Subtotal</h5>
        <p className="text-primary font-semibold">Rs. 250,000.00</p>
      </div>
    </>
  );
}

export default DetailList;