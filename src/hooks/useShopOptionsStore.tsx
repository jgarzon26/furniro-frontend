'use client';

import { ShopOptionsContext } from "@/providers/ShopOptionsProvider";
import { ShopOptionsStore } from "@/stores/shop-options-store";
import { useContext } from "react";
import { useStore } from "zustand";

export const useShopOptionsStore = <T,>(selector: (store: ShopOptionsStore) => T,): T => {
  const shopOptionsStoreContext = useContext(ShopOptionsContext);
  if(!shopOptionsStoreContext) {
    throw new Error('useShopOptionsStore must be used within ShopOptionsProvider');
  }

  return useStore(shopOptionsStoreContext, selector);
}