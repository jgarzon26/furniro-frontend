import { FC } from "react";
import PanelView from "./PanelView";
import PanelNav from "./PanelNav";

const ProductInfoSection: FC = () => {
  return (
    <PanelView navItem={<PanelNav />} renderItems={[]} className="h-[70dvh] border-t border-shop-detail-divider"/>
  );
}

export default ProductInfoSection;