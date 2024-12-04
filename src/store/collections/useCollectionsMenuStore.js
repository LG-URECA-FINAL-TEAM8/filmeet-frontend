import { create } from "zustand";

const useCollectionsMenuStore = create((set) => ({
  openMenuId: null,
  isOpen: false,

  openMenu: (id) => set({ openMenuId: id, isOpen: true }),
  closeMenu: () => set({ openMenuId: null, isOpen: false }),

  handleDocumentClick: (event, ref) => {
    if (ref?.current && !ref.current.contains(event.target)) {
      set({ openMenuId: null, isOpen: false });
    }
  },
}));

export default useCollectionsMenuStore;