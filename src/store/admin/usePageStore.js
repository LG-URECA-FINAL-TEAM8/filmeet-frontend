import { create } from 'zustand';

const usePagestore = create((set) => ({
  currentPage: 'movieManagement',
  setPage: (page) => set({ currentPage: page }),
}));

export default usePagestore;
