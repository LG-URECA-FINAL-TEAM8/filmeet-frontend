import { create } from 'zustand';

const usePaginationStore = create((set) => ({
  currentPage: 1,
  moviesPerPage: 7,
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default usePaginationStore;