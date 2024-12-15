import { create } from "zustand";

const useWorldcupStore = create((set) => ({
  isGameStarted: false,
  gameId: null,
  currentRound: 16,

  setGameStarted: () => set({ isGameStarted: true }),
  setGameId: (gameId) => set({ gameId }),
  setCurrentRound: (round) => set({ currentRound: round }),
}));

export default useWorldcupStore;
