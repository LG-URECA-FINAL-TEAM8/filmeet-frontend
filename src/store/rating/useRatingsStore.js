import { create } from 'zustand';

const useRatingsStore = create((set) => ({
  activeFilter: '전체',
  setActiveFilter: (filter) => set({ activeFilter: filter }),
}));

export default useRatingsStore;
