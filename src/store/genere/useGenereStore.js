import { create } from "zustand";

export const useGenereStore = create((set) => ({
  // MBTI 선택 상태
  selectedMbti: null,
  selectMbti: (mbti) => set({ selectedMbti: mbti }),

  // 나이 선택 상태
  selectedAge: null,
  selectAge: (age) => set({ selectedAge: age }),

  // 장르 선택 상태 추가
  selectedGenre: null, // 선택된 장르 초기값
  selectGenre: (genre) => set({ selectedGenre: genre }), // 장르 선택 함수
}));
