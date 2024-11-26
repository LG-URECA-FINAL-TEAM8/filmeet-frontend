import { create } from 'zustand';

const useAdminEditModalStore = create((set) => ({
  isModalOpen: false,
  selectedMovie: null,
  openModal: (movie) => set({ isModalOpen: true, selectedMovie: movie }),
  closeModal: () => set({ isModalOpen: false, selectedMovie: null }),
  updateMovie: (movie) =>
    set((state) => ({
      selectedMovie: { ...state.selectedMovie, ...movie },
    })),
}));

export default useAdminEditModalStore;