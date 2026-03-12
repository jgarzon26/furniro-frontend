import DisplayCarouselItem from "./DisplayCarouselItem";
import { FC, ReactNode } from "react";

type Props = {
  background: ReactNode;
  foreground?: ReactNode;
}

const DisplayCarouselFirstItem: FC<Props> = ({background, foreground}) => {
  return (
    <DisplayCarouselItem className="relative h-full">
      <div className="absolute h-full w-full">
        {background}
      </div>
      {foreground}
    </DisplayCarouselItem>
  );
}

export default DisplayCarouselFirstItem;