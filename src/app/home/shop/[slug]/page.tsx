import { ProductDetailSection, ProductInfoSection, RelatedProductsSection } from "@/components/shop-detail";
import { FC } from "react";

const ShopDetailPage: FC<PageProps<'/home/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="*:p-10 flex flex-col gap-20 mb-30">
      <ProductDetailSection />
      <ProductInfoSection />
      <RelatedProductsSection slug={slug} />
    </main>
  );
}

export default ShopDetailPage;