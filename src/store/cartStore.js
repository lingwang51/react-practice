import { create } from "zustand";

export const useCartStore = create((set) => ({
  count: 0,
  items: [],
  add: () => set((state) => ({ count: state.count + 1 })),
}));
