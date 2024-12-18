import { create } from 'zustand';

const usePagingStore = create((set) => ({
  currentPage: 'movieManagement',
  setPage: (page) => set({ currentPage: page }),
}));

export default usePagingStore;
