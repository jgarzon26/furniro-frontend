import { ProductDetailSection, ProductInfoSection, RelatedProductsSection } from "@/components/shop-detail";
import { FC } from "react";

const ShopDetailPage: FC<PageProps<'/shop/[slug]'>> = async ({ params }) => {
  const { slug } = await params;

  return (
    <main className="*:p-10 flex flex-col gap-20">
      <ProductDetailSection slug={slug} />
      <ProductInfoSection />
      <RelatedProductsSection />
    </main>
  );
}

export default ShopDetailPage;