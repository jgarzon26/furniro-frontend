import { FC, PropsWithChildren } from "react";

const DisplayCarouselList: FC<PropsWithChildren> = ({children}) => {
  return (
    <ul className="h-120 w-full flex flex-row gap-5">
      {children}
    </ul>
  );
}

export default DisplayCarouselList;