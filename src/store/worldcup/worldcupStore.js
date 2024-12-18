import { create } from "zustand";

const useWorldcupStore = create((set) => ({
  isGameStarted: false,
  gameId: null,
  currentRound: 16,
  winnerMovie: null,

  setGameStarted: () => set({ isGameStarted: true }),
  setGameId: (gameId) => set({ gameId }),
  setCurrentRound: (round) => set({ currentRound: round }),
  setWinnerMovie: (movie) => set({ winnerMovie: movie }),
}));

export default useWorldcupStore;
