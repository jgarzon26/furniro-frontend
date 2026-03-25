import { FC, PropsWithChildren } from "react";

const PanelWrapper: FC<PropsWithChildren> = ({children}) => {
  return <article className="px-20 py-10 flex flex-col gap-10 text-shop-detail-highlight">{children}</article>;
}

export default PanelWrapper;