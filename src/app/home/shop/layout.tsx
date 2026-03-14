import { FC } from "react";
import { Metadata } from "next";
import ShopDataWrapper from "@/components/shop/ShopDataWrapper";
import { Providers } from "@/components/shop";

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Furniro Shopping Page',
};

const ShopLayout: FC<LayoutProps<'/home/shop'>> = ({ children }) => {
  return (
    <Providers>
      <ShopDataWrapper>
        {children}
      </ShopDataWrapper>
    </Providers>
  );
}

export default ShopLayout;