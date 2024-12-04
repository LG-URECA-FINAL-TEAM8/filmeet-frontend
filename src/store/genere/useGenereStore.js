import { create } from "zustand";

export const useGenereStore = create((set) => ({
  // MBTI 선택 상태
  selectedMbti: null,
  selectMbti: (mbti) => set({ selectedMbti: mbti }),

  // 나이 선택 상태
  selectedAge: null,
  selectAge: (age) => set({ selectedAge: age }),

  // 단일 장르 선택 상태
  selectedGenre: null,
  selectGenre: (genre) => set({ selectedGenre: genre }),

  // 다중 장르 선택 상태 (최대 4개)
  selectedGenres: [],
  selectMultipleGenres: (genre) =>
    set((state) => {
      // 이미 선택된 경우 제거
      if (state.selectedGenres.includes(genre)) {
        return {
          selectedGenres: state.selectedGenres.filter((g) => g !== genre),
        };
      }
      // 최대 4개 초과하지 않도록 제한
      if (state.selectedGenres.length >= 3) {
        return state; // 기존 상태 유지
      }
      // 새로운 장르 추가
      return {
        selectedGenres: [...state.selectedGenres, genre],
      };
    }),
}));
