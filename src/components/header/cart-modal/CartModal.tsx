import { FC } from "react";
import { IconButton } from "@/components/common";
import { CartOff } from "@/components/common/icons";
import DetailListTile from "./DetailListTile";
import Actions from "./Actions";

type Props = {
  onClose?: () => void;
};

const CartModal: FC<Props> = ({ onClose }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center h-1/12">
        <h4>Shopping Cart</h4>
        <IconButton icon={CartOff} size={16} color="var(--footer-highlight)" onClick={onClose} />
      </div>
      <hr className="w-3/4 border-cart-modal-divider" />
      <ul className="flex flex-1 flex-col gap-1 overflow-y-auto pb-5">
        <DetailListTile />
        <DetailListTile />
        <DetailListTile />
        <DetailListTile />
      </ul>
      <div className="flex flex-row items-center justify-between">
        <h5 className="font-medium">Subtotal</h5>
        <p className="text-primary font-semibold">Rs. 250,000.00</p>
      </div>
      <hr />
      <Actions onClose={onClose}/>
    </>
  );
}

export default CartModal;