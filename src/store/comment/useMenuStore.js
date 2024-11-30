import { create } from "zustand";

export const useMenuStore = create((set) => ({
  openMenuId: null,
  openMenu: (id) => set({ openMenuId: id }),
  closeMenu: () => set({ openMenuId: null }), 
}));
