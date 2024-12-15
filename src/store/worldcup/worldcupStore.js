import { create } from "zustand";

const useWorldcupStore = create((set) => ({
  // 기본 상태
  isGameStarted: false,
  isLoading: false,
  gameId: null,
  currentRound: 16,
  currentMatches: [],
  nextRoundMatches: [],
  isGameFinished: false,
  winner: null,
  currentMatchIndex: 0, // 현재 매치 인덱스
  isRoundComplete: false, // 현재 라운드 완료 여부

  // 상태 업데이트 메서드
  setGameStarted: () => set({ isGameStarted: true }),
  setLoading: (isLoading) => set({ isLoading }),
  setGameId: (gameId) => set({ gameId }),
  setCurrentRound: (round) => set({ currentRound: round }),
  setCurrentMatches: (matches) => set({ currentMatches: matches }),
  setNextRoundMatches: (matches) => set({ nextRoundMatches: matches }),
  setIsGameFinished: (isFinished) => set({ isGameFinished: isFinished }),
  setWinner: (winner) => set({ winner }),
  setCurrentMatchIndex: (index) => set({ currentMatchIndex: index }),
  incrementMatchIndex: () =>
    set((state) => ({ currentMatchIndex: state.currentMatchIndex + 1 })),
  resetMatchIndex: () => set({ currentMatchIndex: 0 }),
  resetNextRoundMatches: () => set({ nextRoundMatches: [] }),
  setIsRoundComplete: (isComplete) => set({ isRoundComplete: isComplete }),

  // 상태 초기화를 위한 메서드
  resetGame: () =>
    set({
      isGameStarted: false,
      isLoading: false,
      gameId: null,
      currentRound: 16,
      currentMatches: [],
      nextRoundMatches: [],
      isGameFinished: false,
      winner: null,
      currentMatchIndex: 0,
      isRoundComplete: false,
    }),
}));

export default useWorldcupStore;
