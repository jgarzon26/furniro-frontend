import { ComponentType, FC, ReactNode } from "react";
import { IconProps } from "@/components/common/icons";

type Props = {
  icon: ComponentType<IconProps>;
  title: string;
  desc: ReactNode;
}

const ContactDetail: FC<Props> = ({icon: Icon, title, desc}) => {
  return (
    <article className="flex flex-row gap-5">
      <Icon size={24}/>
      <div>
        <h4 className="font-medium">{title}</h4>
        {desc}
      </div>
    </article>
  );
}

export default ContactDetail;