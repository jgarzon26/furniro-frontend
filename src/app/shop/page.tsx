import { IntroSection } from "@/components/common";
import { OptionsTabSection, PaginationSection, ShopGridSection } from "@/components/shop";

const ShopPage = () => {
  return (
    <main className="flex flex-col">
      <IntroSection />
      <OptionsTabSection />
      <ShopGridSection/>
      <PaginationSection />
    </main>
  );
}

export default ShopPage;