import { create } from "zustand";

type StickyState = {
  stickyActive: boolean;
  setStickyActive: (val: boolean) => void;
};

export const useStickyStore = create<StickyState>()((set) => ({
  stickyActive: false,
  setStickyActive: (val) => set((prevState) => ({ stickyActive: val })),
}));

type ModalState = {
  modal: boolean;
  setModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modal: false,
  setModal: () =>
    set((prevState) => ({
      modal: !prevState.modal,
    })),
}));

type MessageIdState = {
  id: string;
  setId: (val: string) => void;
};

export const useIdStore = create<MessageIdState>()((set) => ({
  id: "",
  setId: (val) => set(() => ({ id: val })),
}));
