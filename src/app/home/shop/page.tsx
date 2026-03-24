import { IntroSection } from "@/components/common";
import { ShopSection } from "@/components/shop";
import { OptionsTabSection, PaginationSection, ShopGridSection } from "@/components/shop";

const ShopPage = () => {
  return (
    <main className="flex flex-col">
      <IntroSection />
      <ShopSection>
        <OptionsTabSection />
        <ShopGridSection />
        <PaginationSection />
      </ShopSection>
    </main>
  );
}

export default ShopPage;