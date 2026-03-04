import ShopOptionsProvider from "@/providers/ShopOptionsProvider";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Furniro Shopping Page',
};

const ShopLayout: FC<LayoutProps<'/shop'>> = ({children}) => {
  return (
    <ShopOptionsProvider>
      {children}
    </ShopOptionsProvider>
  );
}

export default ShopLayout;