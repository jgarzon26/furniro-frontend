
import { ProductDetailSection } from "@/components/shop-detail";
import ProductInfoSection from "@/components/shop-detail/ProductInfoSection";
import { FC } from "react";

const ShopDetailPage: FC<PageProps<'/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="*:p-10 flex flex-col gap-20">
      <ProductDetailSection slug={slug}/>
      <ProductInfoSection />
    </main>
  );
}

export default ShopDetailPage;