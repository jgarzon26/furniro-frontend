import { FC } from "react";

type Props = {
  flex?: number;
};

const Spacer: FC<Props> = ({flex}) => {
  return <div className={`flex-${flex ?? 1}`}/>;
}

export default Spacer;