import { CategorySection, IntroSection, ProductSection, DisplaySection, ImageGallerySection } from "@/components/home";

const HomePage = () => {
  return (
    <main>
      <IntroSection />
      <CategorySection />
      <ProductSection />
      <DisplaySection />
      <ImageGallerySection />
    </main>
  );
}

export default HomePage;