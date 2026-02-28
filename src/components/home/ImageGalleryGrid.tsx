import { FC, PropsWithChildren } from "react";

const ImageGalleryGrid: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col gap-5 *:flex *:gap-3">{children}</div>
  );
}

export default ImageGalleryGrid;