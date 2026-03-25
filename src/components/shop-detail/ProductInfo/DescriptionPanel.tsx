'use client';

import { FC } from "react";
import useShopDetailQuery from "@/hooks/useShopDetailQuery";
import Image from "next/image";
import PanelWrapper from "./PanelWrapper";

const DescriptionPanel: FC = () => {
  const { description, images } = useShopDetailQuery();

  return (
    <PanelWrapper>
      <p>{description}</p>
      <div className="flex flex-row gap-10">
        <div className="flex-1 aspect-3/2 relative">
          <Image src={images[2] ?? ''} alt={images[2] ?? ''} fill />
        </div>
        <div className="flex-1 aspect-3/2 relative">
          <Image src={images[3] ?? ''} alt={images[3] ?? ''} fill />
        </div>
      </div>
    </PanelWrapper>
  );
}

export default DescriptionPanel;