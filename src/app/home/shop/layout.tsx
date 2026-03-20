import { FC } from "react";
import { Metadata } from "next";
import ShopDataWrapper from "@/components/shop/ShopDataWrapper";
import ShopOptionsProvider from "@/providers/ShopOptionsProvider";

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Furniro Shopping Page',
};

const ShopLayout: FC<LayoutProps<'/home/shop'>> = ({ children }) => {
  return (
    <ShopOptionsProvider>
      <ShopDataWrapper>
        {children}
      </ShopDataWrapper>
    </ShopOptionsProvider>
  );
}

export default ShopLayout;