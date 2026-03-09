import { NavBar } from "@/components/shop-detail";
import { FC } from "react";

const ShopDetailLayout: FC<LayoutProps<'/shop/[slug]'>> = async ({children, params}) => {
  const { slug } = await params;

  return (
    <>
      <NavBar slug={slug}/>
      {children}
    </>
  );
}

export default ShopDetailLayout;