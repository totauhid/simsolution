import { create } from "zustand";

type StickyType = {
  stickyActive: boolean;
  setStickyActive: (val: boolean) => void;
};

export const useStickyStore = create<StickyType>()((set) => ({
  stickyActive: false,
  setStickyActive: (val) => set(() => ({ stickyActive: val })),
}));
