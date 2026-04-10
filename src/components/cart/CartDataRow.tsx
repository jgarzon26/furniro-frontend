import { IconButton } from "@/components/common";
import { Delete } from "@/components/common/icons";
import { CartItemShortFragment } from "@/types/generated/graphql";
import Image from "next/image";
import { FC } from "react";

type Props = {
  item: CartItemShortFragment;
}

const CartDataRow: FC<Props> = ({item}) => {
  const { title, price, discountedPrice, images } = item.product;
  const actualPrice = discountedPrice ?? price;

  return (
    <tr>
      <td className="h-40 p-8">
        <div className="h-full bg-primary/22 rounded-lg relative">
          <Image src={images[0] ?? ''} alt={title} fill/>
        </div>
      </td>
      <td>{title}</td>
      <td className="text-footer-highlight">$ {actualPrice}</td>
      <td className="flex justify-center items-center h-full">
        <p className="flex items-center justify-center border border-cart-border rounded-[5px] w-1/3 p-2">{item.quantity}</p>
      </td>
      <td>$ {actualPrice * item.quantity}</td>
      <td>
        <IconButton icon={Delete} size={28} color="var(--primary)" />
      </td>
    </tr>
  );
}

export default CartDataRow;