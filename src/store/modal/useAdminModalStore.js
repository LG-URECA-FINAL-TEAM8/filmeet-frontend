import { create } from 'zustand';

const useAdminModalStore = create((set) => ({
  addModal: {
    isOpen: false,
    selectedMovie: null,
  },

  openAddModal: (movie) =>
    set((state) => ({
      addModal: { ...state.addModal, isOpen: true, selectedMovie: movie },
    })),
  closeAddModal: () =>
    set((state) => ({
      addModal: { ...state.addModal, isOpen: false, selectedMovie: null },
    })),
}));

export default useAdminModalStore;