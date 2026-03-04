import { createStore } from "zustand";

export type ShopOptionsState = {
  show: number;
  short: string;
}

export type ShopOptionsActions = {
  setShow: (value: number) => void;
  setShort: (value: string) => void;
}

export type ShopOptionsStore = ShopOptionsState & ShopOptionsActions;

export const initShopOptionsState: ShopOptionsState = {
  show: 16,
  short: '',
}

export const createShopOptionsStore = (initState: ShopOptionsState = initShopOptionsState) => {
  return createStore<ShopOptionsStore>()((set) => ({
    ...initState,
    setShow: (value) => set(() => ({ show: value })),
    setShort: (value) => set(() => ({ short: value })),
  }));
}