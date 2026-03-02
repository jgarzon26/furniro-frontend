import { Placeholder, Spacer, TextButton } from "../common";
import { CarouselIndicator, CarouselLeftButton, CarouselRightButton, DisplayCarousel, DisplayCarouselItem, DisplayCarouselList } from "./DisplayCarousel";
import DisplayCarouselFirstItem from "./DisplayCarousel/DisplayCarouselFirstItem";

const DisplaySection = () => {
  //TODO: Make this background color rely on theme
  return (
    <section className="flex flex-row bg-[#FCF8F3] py-10">
      <Spacer />
      <article className="flex flex-3 flex-col justify-center gap-5">
        <h2 className="leading-[120%]">50+ Beautiful rooms inspiration</h2>
        <p className="w-2/3">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <TextButton className="w-1/2 px-0 py-2">
          <TextButton.Text>Explore More</TextButton.Text>
        </TextButton>
      </article>
      <article className="flex-7 overflow-hidden">
        <DisplayCarousel>
          <CarouselLeftButton />
          <CarouselIndicator />
          <DisplayCarouselList>
            <DisplayCarouselFirstItem />
            <DisplayCarouselItem>
              <Placeholder />
            </DisplayCarouselItem>
            <DisplayCarouselItem>
              <Placeholder />
            </DisplayCarouselItem>
            <DisplayCarouselItem>
              <Placeholder />
            </DisplayCarouselItem>
          </DisplayCarouselList>
          <CarouselRightButton />
        </DisplayCarousel>
      </article>
    </section>
  );
}

export default DisplaySection;