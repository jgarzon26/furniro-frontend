import { FC } from "react";
import { Metadata } from "next";
import ShopOptionsProvider from "@/providers/ShopOptionsProvider";

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Furniro Shopping Page',
};

const ShopLayout: FC<LayoutProps<'/home/shop'>> = ({ children }) => {
  return (
    <ShopOptionsProvider>
      {children}
    </ShopOptionsProvider>
  );
}

export default ShopLayout;