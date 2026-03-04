import { OptionsTabSection, PaginationSection, ShopGridSection, ShopIntroSection } from "@/components/shop";

const ShopPage = () => {

  return (
    <main className="flex flex-col">
      <ShopIntroSection />
      <OptionsTabSection />
      <ShopGridSection/>
      <PaginationSection />
    </main>
  );
}

export default ShopPage;