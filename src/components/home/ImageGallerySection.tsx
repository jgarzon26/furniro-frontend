import Image from "next/image";
import HomeHeader from "./HomeHeader";
import SectionWrapper from "./SectionWrapper";
import { Image36, Image37, Image38, Image39, Image40, Image41, Image43, Image44, Image45 } from "@/assets/images/image-home-gallery";
import ImageGalleryGrid from "./ImageGalleryGrid";

const ImageGallerySection = () => {
  return (
    <SectionWrapper>
      <HomeHeader>
        <HomeHeader.Subtitle className="font-semibold">Share your setup with</HomeHeader.Subtitle>
        <h2>#FurniroFurniture</h2>
      </HomeHeader>
      <article className="flex flex-row justify-center items-center gap-5 overflow-x-hidden">
        <ImageGalleryGrid>
          <div>
            <Image src={Image36} alt="gallery"/>
            <Image src={Image38} alt="gallery" className="self-end h-10/12" />
          </div>
          <div>
            <Image src={Image37} alt="gallery" />
            <Image src={Image39} alt="gallery" className="self-start h-10/12"/>
          </div>
        </ImageGalleryGrid>
        <Image src={Image40} alt='gallery' />
        <ImageGalleryGrid>
          <div>
            <Image src={Image43} alt="gallery" className="h-10/12 self-end"/>
            <Image src={Image45} alt="gallery" />
          </div>
          <div>
            <Image src={Image41} alt="gallery" />
            <Image src={Image44} alt="gallery" className="h-10/12 self-start"/>
          </div>
        </ImageGalleryGrid>
      </article>
    </SectionWrapper>
  );
}

export default ImageGallerySection;