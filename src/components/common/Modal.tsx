import { EventHandler, FC, MouseEventHandler, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  show?: boolean;
  className?: string;
  onClose?: () => void;
}

const Modal: FC<Props & PropsWithChildren> = ({children, className, onClose, show}) => {
  return show ? createPortal(
    <dialog open className="fixed w-full h-dvh bg-black/20 z-50" onClick={(event) => event.target === event.currentTarget && onClose?.()}>
      <section className={twMerge('absolute bg-primary-foreground max-w-11/12 w-50 z-50', className)}>
         {children}
      </section>
    </dialog>
  , document.getElementById('modal')!) : null;
}

export default Modal;