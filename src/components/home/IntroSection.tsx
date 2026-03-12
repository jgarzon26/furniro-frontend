import Image from "next/image";
import IntroBackground from '@/assets/images/intro-background.png';
import BuyNowButton from "./BuyNowButton";

const IntroSection = () => {
  return (
    <section className="relative h-dvh w-full">
      <Image src={IntroBackground} alt="Intro" className="absolute w-full h-full object-cover" />
      <div className="absolute right-15 top-1/4 bottom-1/4 z-10 w-[40%] bg-secondary p-10 flex flex-col gap-5 justify-center">
        <h5 className="tracking-[3px]">New Arrival</h5>
        <h1 className="leading-[1.1]">Discover Our <br />New Collection</h1>
        <p className="text-lg font-medium">
          Elevate your space with our latest interior design pieces, thoughtfully curated to blend style,
          comfort, and functionality. From modern statement furniture to elegant décor accents,
          discover designs that transform every room into a place you love to live in.
        </p>
        <BuyNowButton />
      </div>
    </section>
  );
}

export default IntroSection;