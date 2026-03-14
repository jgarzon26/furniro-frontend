import { createStore } from "zustand";

export type ShopOptionsState = {
  //items per page
  show: number;
  short: string;
  //current page number
  page: number;
  //total count of products
  count: number;
}

export type ShopOptionsActions = {
  setShow: (value: number) => void;
  setShort: (value: string) => void;
  setPage: (value: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
  setCount: (value: number) => void;
}

export type ShopOptionsStore = ShopOptionsState & ShopOptionsActions;

export const initShopOptionsState: ShopOptionsState = {
  show: 16,
  short: '',
  page: 1,
  count: 0,
}

export const createShopOptionsStore = (initState: ShopOptionsState = initShopOptionsState) => {
  return createStore<ShopOptionsStore>()((set) => ({
    ...initState,
    setShow: (value) => set(() => ({ show: value })),
    setShort: (value) => set(() => ({ short: value })),
    setPage: (value) => set(() => ({ page: value })),
    incrementPage: () => set((state) => ({ page: state.page + 1 })),
    decrementPage: () => set((state) => ({ page: state.page - 1 })),
    setCount: (value) => set(() => ({ count: value })), 
  }));
}