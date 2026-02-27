import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

const HomeHeader: FC<Props & PropsWithChildren> & { Subtitle: FC<PropsWithChildren>} = ({ className, children }) => {
  return (
    <div className={twMerge("flex flex-col items-center text-center mb-15", className)}>
      {children}
    </div>
  );
}

const HomeHeaderSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-paragraph-desc w-2/3">{children}</p>
}

HomeHeader.Subtitle = HomeHeaderSubtitle;

export default HomeHeader;