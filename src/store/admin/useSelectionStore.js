import { create } from 'zustand';

const useSelectionStore = create((set) => ({
  selectedMovies: [],
  addMovie: (movieId) => set((state) => ({
    selectedMovies: [...state.selectedMovies, movieId],
  })),
  removeMovie: (movieId) => set((state) => ({
    selectedMovies: state.selectedMovies.filter((id) => id !== movieId),
  })),
  clearSelection: () => set({ selectedMovies: [] }),
}));

export default useSelectionStore;