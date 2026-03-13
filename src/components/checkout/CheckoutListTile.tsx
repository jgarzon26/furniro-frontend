import { ElementType, FC, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: ElementType<HTMLAttributes<HTMLElement>>;
  titleChildren?: ReactNode;
  titleClassName?: string;
  subtitle: ElementType<HTMLAttributes<HTMLElement>>;
  subtitleChildren?: ReactNode;
  subtitleClassName?: string;
}

const CheckoutListTile: FC<Props> = ({title: Title, titleChildren, titleClassName, subtitle: Subtitle, subtitleChildren, subtitleClassName}) => {
  return (
    <div className="flex flex-row items-center">
      <Title className={twMerge("flex-1 ", titleClassName)}>{titleChildren}</Title>
      <Subtitle className={twMerge("flex-1 text-end", subtitleClassName)}>{subtitleChildren}</Subtitle>
    </div>
  );
}

export default CheckoutListTile;