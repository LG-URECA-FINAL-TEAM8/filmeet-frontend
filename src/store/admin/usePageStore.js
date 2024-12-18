import { create } from 'zustand';

const usePageStore = create((set) => ({
  currentPage: 'movieManagement',
  setPage: (page) => set({ currentPage: page }),
}));

export default usePageStore;
