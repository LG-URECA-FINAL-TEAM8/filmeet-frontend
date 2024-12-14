// stores/worldcupStore.js
import { create } from "zustand";

const useWorldcupStore = create((set) => ({
  isGameStarted: false,
  isLoading: false,
  setGameStarted: () => set({ isGameStarted: true }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export default useWorldcupStore;
