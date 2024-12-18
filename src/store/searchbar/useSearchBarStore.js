import { create } from 'zustand';
const useSearchBarStore = create((set) => ({
  isModalOpen: false,
  setModalOpen: (value) => set({ isModalOpen: value }),
}));

export default useSearchBarStore;
