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
      renderItems={[
        <DescriptionPanel key={'desc'}/>, 
        <AdditionalInfoPanel  key={'info'}/>,
        <Reviews key={'reviews'}/>,
      ]} 
      className="h-fit border-t border-shop-detail-divider"
    />
  );
}

export default ProductInfoSection;