import { FC } from "react";
import { StarFilled, StarHalf } from "./icons";

type Props = {
  count: number;
}

const Rating: FC<Props> = ({count}) => {
  const length = Math.min(Math.max(count, 0), 5);
  const decimal = (length - Math.floor(length)) < 0.5 ? 0 : 0.5;
  const rate = Math.trunc(length);
  
  const size = 20;
  const color = '#FFC700';

  return (
    <div className="flex flex-row items-center gap-2">
      {
        Array.from({length: rate}).map((_, index) => (
          <StarFilled key={index} size={size} color={color}/>
        ))
      }
      {
        decimal > 0 && <StarHalf size={size} color={color}/>
      }
    </div>
  );
}

export default Rating;