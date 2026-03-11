'use client';

import { FC } from "react";
import { usePanelContext } from "./PanelView";

const PanelNav: FC = () => {
  const { index, setIndex } = usePanelContext();
  const navStyle = "font-normal text-shop-detail-highlight";
  const navStyleActive = 'font-medium text-foreground';

  return (
    <nav className="flex flex-row items-center justify-center gap-15 [&_h4]:hover:cursor-pointer">
      <h4 onClick={() => setIndex(0)} className={`${index === 0 ? navStyleActive : navStyle}`}>Description</h4>
      <h4 onClick={() => setIndex(1)} className={`${index === 1 ? navStyleActive : navStyle}`}>Additional Information</h4>
      <h4 onClick={() => setIndex(2)} className={`${index === 2 ? navStyleActive : navStyle}`}>Reviews [5]</h4>
    </nav>
  );
}

export default PanelNav;