import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  setLoggedIn: (value) => {
    localStorage.setItem('isLoggedIn', value);
    set({ isLoggedIn: value });
  },
  logout: () => {
    localStorage.setItem('isLoggedIn', 'false');
    set({ isLoggedIn: false });
  },
}));

export default useLoginStore;
