import { create } from 'zustand';

const useAdminModalStore = create((set) => ({
  addModal: {
    isOpen: false,
    title: '',
    image: null,
    genre: '',
    releaseDate: '',
  },
  openAddModal: (movie) => set((state) => ({
    addModal: {
      ...state.addModal,
      isOpen: true,
      title: movie.title || '',
      image: movie.image || null,
      genre: movie.genre || '',
      releaseDate: movie.releaseDate || '',
    },
  })),
  closeAddModal: () => set((state) => ({
    addModal: { ...state.addModal, isOpen: false },
  })),
  setAddModalTitle: (title) => set((state) => ({
    addModal: { ...state.addModal, title },
  })),
  setAddModalImage: (image) => set((state) => ({
    addModal: { ...state.addModal, image },
  })),
  setAddModalGenre: (genre) => set((state) => ({
    addModal: { ...state.addModal, genre },
  })),
  setAddModalReleaseDate: (releaseDate) => set((state) => ({
    addModal: { ...state.addModal, releaseDate },
  })),
}));

export default useAdminModalStore;
