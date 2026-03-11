import { FC, PropsWithChildren } from "react";
import { Facebook, LinkedIn, Twitter } from "@/components/common/icons";
import { twMerge } from "tailwind-merge";
import { IconButton } from "@/components/common";

type Props = {
  title: string;
  className?: string;
  descClassName?: string;
}

const MetaListTile: FC<Props & PropsWithChildren> = ({title, className, descClassName, children}) => {
  return (
    <div className={twMerge("flex flex-row items-center *:text-shop-detail-highlight", className)}>
      <p className="flex-1">{title}</p>
      <p className="font-semibold">:</p>
      <div className={twMerge("ml-5 flex-4 flex flex-row items-center", descClassName)}>{children}</div>
    </div>
  );
}

const ProductMetaDetails: FC = () => {
  const iconSize = 20;

  return (
    <>
      <hr className="my-5 border-shop-detail-divider"/>
      <article className="w-2/3 flex flex-col gap-3">
        <MetaListTile title="SKU">SS001</MetaListTile>
        <MetaListTile title="Category">Sofas</MetaListTile>
        <MetaListTile title="Tags">Sofa, Chair, Home, Shop</MetaListTile>
        <MetaListTile title="Share" className="[&_svg]:text-foreground" descClassName="gap-3">
          <IconButton icon={Facebook} size={iconSize}/>
          <IconButton icon={LinkedIn} size={iconSize}/>
          <IconButton icon={Twitter} size={iconSize}/>
        </MetaListTile>
      </article>
    </>
  );
}

export default ProductMetaDetails;