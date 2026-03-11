import { FC } from "react";
import PanelView from "./PanelView";
import PanelNav from "./PanelNav";
import DescriptionPanel from "./DescriptionPanel";
import AdditionalInfoPanel from "./AdditionalInfoPanel";
import Reviews from "./Reviews";

const ProductInfoSection: FC = () => {
  return (
    <PanelView 
      navItem={<PanelNav />} 
      renderItems={[<DescriptionPanel key={'desc'}/>]} 
      className="h-[70dvh] border-t border-shop-detail-divider"
        <AdditionalInfoPanel  key={'info'}/>,
        <Reviews key={'reviews'}/>,
    />
  );
}

export default ProductInfoSection;