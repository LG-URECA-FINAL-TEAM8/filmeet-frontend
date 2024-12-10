import { create } from 'zustand';

const useErrorStore = create((set) => ({
  code: '',
  setCode: (code) => set({ code }),
}));

export default useErrorStore;
