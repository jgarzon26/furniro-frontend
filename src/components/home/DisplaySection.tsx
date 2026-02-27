import { Placeholder, SizedBox, Spacer, TextButton } from "../common";

const DisplaySection = () => {
  //TODO: Make this background color rely on theme
  return (
    <section className="flex flex-row bg-[#FCF8F3] px-20 py-10">
      <Spacer />
      <article className="flex flex-1 flex-col justify-center gap-5">
        <h2 className="leading-[120%]">50+ Beautiful rooms inspiration</h2>
        <p className="w-3/4">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <TextButton className="w-1/2 px-0 py-2">
          <TextButton.Text>Explore More</TextButton.Text>
        </TextButton>
      </article>
      <SizedBox width={50}/>
      <article className="flex-3 overflow-x-hidden">
        <ul className="h-120 w-full flex flex-row gap-5">
          <li className="relative h-full aspect-2/3">
            <Placeholder className="absolute"/>
            <div className="absolute left-5 bottom-5 w-1/2 h-1/5 bg-primary-foreground flex flex-col px-5 justify-center">
              <p className="text-paragraph-desc">01 --- Category</p>
              <h4 className="text-[28px]">Title</h4>
            </div>
          </li>
          <li className="h-10/12 aspect-3/2">
            <Placeholder/>
            {/* TODO: Add an indicator */}
          </li>
          <li className="h-10/12 aspect-3/2">
            <Placeholder/>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default DisplaySection;