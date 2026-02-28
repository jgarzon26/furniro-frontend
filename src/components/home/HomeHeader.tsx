import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
}

type SubtitleProps = {
  className?: string;
}

const HomeHeader: FC<Props & PropsWithChildren> & { Subtitle: FC<SubtitleProps & PropsWithChildren>} = ({ className, children }) => {
  return (
    <div className={twMerge("flex flex-col items-center text-center mb-15", className)}>
      {children}
    </div>
  );
}

const HomeHeaderSubtitle: FC<SubtitleProps & PropsWithChildren> = ({ className, children }) => {
  return <p className={twMerge("text-paragraph-desc w-2/3", className)}>{children}</p>
}

HomeHeader.Subtitle = HomeHeaderSubtitle;

export default HomeHeader;