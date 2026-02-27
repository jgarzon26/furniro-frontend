import { FC, PropsWithChildren } from "react";

const HomeHeader: FC<PropsWithChildren> & { Subtitle: FC<PropsWithChildren>} = ({ children }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {children}
    </div>
  );
}

const HomeHeaderSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-paragraph-desc w-2/3">{children}</p>
}

HomeHeader.Subtitle = HomeHeaderSubtitle;

export default HomeHeader;