import { FC } from "react";
import { Metadata } from "next";
import ShopOptionsProvider from "@/providers/ShopOptionsProvider";
import { SWRConfig } from "swr";
import { fetchData } from "@/lib/api";
import { IntroSection } from "@/components/common";

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Furniro Shopping Page',
};

const ShopLayout: FC<LayoutProps<'/shop'>> = ({ children }) => {
  const tempdata = fetchData();

  return (
    <SWRConfig value={{fallback: {'/api/shop': tempdata}}}>
      <ShopOptionsProvider>
        <IntroSection />
        {children}
      </ShopOptionsProvider>
    </SWRConfig>
  );
}

export default ShopLayout;