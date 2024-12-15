import { create } from 'zustand';

export const useGenereStore = create((set) => ({
  selectedMbti: null,
  selectMbti: (mbti) => set({ selectedMbti: mbti }),

  selectedAge: null,
  selectAge: (age) => set({ selectedAge: age }),

  selectedGenre: null,
  selectGenre: (genre) => set({ selectedGenre: genre }),

  selectedGenres: [],
  selectMultipleGenres: (genre) =>
    set((state) => {
      if (state.selectedGenres.includes(genre)) {
        return {
          selectedGenres: state.selectedGenres.filter((g) => g !== genre),
        };
      }

      if (state.selectedGenres.length >= 5) {
        return state;
      }

      return {
        selectedGenres: [...state.selectedGenres, genre],
      };
    }),
}));
