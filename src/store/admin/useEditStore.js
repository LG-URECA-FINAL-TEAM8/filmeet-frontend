import { create } from 'zustand';

const useEditStore = create((set) => ({
  editingRow: null,
  setEditingRow: (movieId) => set({ editingRow: movieId }),
  updateMovieField: (movieId, field, value) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId ? { ...movie, [field]: value } : movie
      ),
    })),
}));
export default useEditStore;
