'use client';

import { FC } from "react";

const PanelNav: FC = () => {
  return (
    <nav className="flex flex-row items-center justify-center gap-15 [&_h4]:font-medium [&_h4]:text-shop-detail-highlight [&_h4]:hover:cursor-pointer">
      <h4>Description</h4>
      <h4>Additional Information</h4>
      <h4>Reviews [5]</h4>
    </nav>
  );
}

export default PanelNav;