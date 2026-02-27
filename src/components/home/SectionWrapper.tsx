import { FC, PropsWithChildren } from "react";

const SectionWrapper: FC<PropsWithChildren> = ({children}) => {
  return <section className="flex flex-col items-center gap-15 my-5">{children}</section>;
}

export default SectionWrapper;