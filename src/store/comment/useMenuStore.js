import { create } from "zustand";

export const useMenuStore = create((set) => ({
  openMenuId: null,
  isOpen: false,

  openMenu: (id) => set({ openMenuId: id, isOpen: true }),
  closeMenu: () => set({ openMenuId: null, isOpen: false }),

  handleDocumentClick: (event, ref) => {
    if (ref.current && !ref.current.contains(event.target)) {
      set({ openMenuId: null, isOpen: false });
    }
  },
}));
