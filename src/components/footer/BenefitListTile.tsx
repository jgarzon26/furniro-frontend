import Image, { StaticImageData } from "next/image";
import { FC } from "react";

type Props = {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

const BenefitListTile: FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Image src={icon} alt={title} />
      <div className="flex flex-col">
        <h4 className="font-semibold text-[25px]">{title}</h4>
        <p className="text-footer-benefit-sub text-[20px]">{subtitle}</p>
      </div>
    </div>
  );
}

export default BenefitListTile;