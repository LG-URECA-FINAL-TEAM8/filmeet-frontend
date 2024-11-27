import { create } from 'zustand';

const useModalStore = create((set) => ({
  addModal: {
    isOpen: false,
    selectedMovie: null,
  },
  editModal: {
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

  openEditModal: (movie) =>
    set((state) => ({
      editModal: { ...state.editModal, isOpen: true, selectedMovie: movie },
    })),
  closeEditModal: () =>
    set((state) => ({
      editModal: { ...state.editModal, isOpen: false, selectedMovie: null },
    })),
  updateEditMovie: (movie) =>
    set((state) => ({
      editModal: {
        ...state.editModal,
        selectedMovie: { ...state.editModal.selectedMovie, ...movie },
      },
    })),
}));

export default useModalStore;