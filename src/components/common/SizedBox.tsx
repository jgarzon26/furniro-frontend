import { FC } from "react";

type Props = {
  height?: number;
  width?: number;
}

const SizedBox: FC<Props> = ({height, width}) => {
  return <div style={{ height, width }}/>;
}

export default SizedBox;