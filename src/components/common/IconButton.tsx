import { ComponentType, FC, SVGProps } from "react";

type Props = {
  size?: number;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ size, icon: Icon, onClick }) => {
  const s = size ?? 24;

  return (
    <button type="button" onClick={onClick} className="hover:cursor-pointer" style={{width: s, height: s}}>
      <Icon />
    </button>
  );
}

export default IconButton;