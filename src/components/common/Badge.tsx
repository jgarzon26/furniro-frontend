import { FC, PropsWithChildren } from "react";

const Badge: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Badge;