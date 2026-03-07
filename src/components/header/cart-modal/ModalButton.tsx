'use client';

import { FC, useState } from "react";
import { IconButton, Modal } from "@/components/common";
import { ShoppingCart } from "@/components/common/icons";
import CartModal from "./CartModal";

const ModalButton: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal show={show} onClose={() => setShow(false)} className="h-[75dvh] w-100 top-0 right-0 p-5 flex flex-col gap-5">
        <CartModal onClose={() => setShow(false)} />
      </Modal>
      <IconButton icon={ShoppingCart} onClick={() => setShow(true)} />
    </>
  );
}

export default ModalButton;