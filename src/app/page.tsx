import Footer from "@/components/footer/Footer";
import { CategorySection, IntroSection, ProductSection, DisplaySection, ImageGallerySection } from "@/components/home";

const HomePage = () => {
  return (
    <>
      <main>
        <IntroSection />
        <CategorySection />
        <ProductSection />
        <DisplaySection />
        <ImageGallerySection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;