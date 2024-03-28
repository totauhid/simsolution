import { create } from "zustand";

type Store = {
  stickyActive: boolean;
  setStickyActive: (val: boolean) => void;
};

export const useStickyStore = create<Store>()((set) => ({
  stickyActive: false,
  setStickyActive: (val) => set(() => ({ stickyActive: val })),
}));
