'use client';

import { createContext, FC, PropsWithChildren, useState } from "react";
import { createShopOptionsStore } from "@/stores/shop-options-store";

const ShopOptionsProvider: FC<PropsWithChildren> = ({children}) => {
  const [store] = useState(() => createShopOptionsStore());
  return (
    <ShopOptionsContext value={store}>
      {children}
    </ShopOptionsContext>
  );
}

export type ShopOptionsStoreApi = ReturnType<typeof createShopOptionsStore>;

export const ShopOptionsContext = createContext<ShopOptionsStoreApi | undefined>(undefined);

export default ShopOptionsProvider;