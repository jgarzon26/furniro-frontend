import { ComponentType, FC, SVGProps } from "react";

type Props = {
  size?: number;
  color?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ size, icon: Icon, color, onClick }) => {
  const s = size ?? 24;

  return (
    <button type="button" onClick={onClick} className="hover:cursor-pointer" style={{width: s, height: s, color}}>
      <Icon />
    </button>
  );
}

export default IconButton;