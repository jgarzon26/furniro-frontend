import { FC } from "react";
import { AdditionalInfoPanel, DescriptionPanel, PanelNav, PanelView, Reviews } from "./ProductInfo";
import { ProductQueryRef } from "@/types/queries";

type Props = {
  queryRef: ProductQueryRef;
}

const ProductInfoSection: FC<Props> = ({queryRef}) => {


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