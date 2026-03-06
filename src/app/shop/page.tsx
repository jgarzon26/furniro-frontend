import { OptionsTabSection, PaginationSection, ShopGridSection } from "@/components/shop";

const ShopPage = () => {
  return (
    <main className="flex flex-col">
      <OptionsTabSection />
      <ShopGridSection/>
      <PaginationSection />
    </main>
  );
}

export default ShopPage;