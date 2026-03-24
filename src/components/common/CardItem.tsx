import Image, { StaticImageData } from "next/image";
import Badge from "./Badge";
import TextButton from "./TextButton";
import { Compare, Favorite, Share } from "@/assets/icons";
import { FC } from "react";
import { ProductShortFragment } from "@/types/generated/graphql";

type Props = {
  product: ProductShortFragment;
}

const icons: {title: string, icon: StaticImageData}[] = [
  {
    icon: Share,
    title: 'Share',
  }, 
  {
    icon: Compare,
    title: 'Compare',
  },
  {
    icon: Favorite,
    title: 'Like',
  }
];

const CardItem: FC<Props> = ({ product }) => {
  const { sku, slug, title, subtitle, price, discountedPrice, images } = product;

  return (
    <li className="relative h-125 w-75 group *:duration-300">
      <article className="absolute w-full h-full bg-card-background flex flex-col">
        <div className="flex-1 relative">
          <Image src={images[0] ?? ''} alt={title} fill/>
          <Badge />
        </div>
        <div className="flex flex-col gap-1 p-5">
          <h4>{title}</h4>
          <p className="text-card-desc">{subtitle}</p>
          <div className="flex flex-row justify-between items-center">
            <h5 className={`text-[20px] ${discountedPrice && 'text-decoration-line'}`}>${discountedPrice ? discountedPrice : price}</h5>
            <p className="text-card-desc line-through">{discountedPrice && `$${price}`}</p>
          </div>
        </div>
      </article>
      <article className="absolute w-full h-full opacity-0 group-hover:opacity-100">
        <div className="absolute w-full h-full bg-card-hover-background/72"/>
        <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center gap-5">
          <TextButton className="bg-button-secondary text-button-secondary-foreground py-3">
            <p className="font-bold">Add To Cart</p>
          </TextButton>
          <ul className="flex flex-row justify-between gap-5">
            {
              icons.map(({icon, title}, index) => (
                <li key={index}>
                  <TextButton className="p-0 bg-transparent flex flex-row gap-1">
                    <Image src={icon} alt={title}/>
                    <TextButton.Text className="font-semibold">{title}</TextButton.Text>
                  </TextButton>
                </li>
              ))
            }
          </ul>
        </div>
      </article>
    </li>
  );
}

export default CardItem;