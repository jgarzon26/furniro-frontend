import { IntroSection } from "@/components/common";
import { ShopSection } from "@/components/shop";

const ShopPage = () => {
  return (
    <main className="flex flex-col">
      <IntroSection />
      <ShopSection />
    </main>
  );
}

export default ShopPage;