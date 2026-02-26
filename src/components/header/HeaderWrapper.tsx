'use client';

import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

const HeaderWrapper: FC<PropsWithChildren> = ({children}) => {
  const path = usePathname();

  const headerHomePageStyle = path === '/' ? 'absolute w-full z-50 bg-background' : '';

  return (
    <header className={'flex flex-row items-center *:flex *:flex-row *:items-center h-25 px-20 py-10 ' + headerHomePageStyle}>
      {children}
    </header>
  );
}

export default HeaderWrapper;