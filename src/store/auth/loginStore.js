import { create } from 'zustand';
const useLoginStore = create((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
}));

export default useLoginStore;
