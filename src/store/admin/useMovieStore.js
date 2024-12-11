import { create } from 'zustand';

const useMovieStore = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  
  updateMovieField: (movieId, field, value) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === movieId ? { ...movie, [field]: value } : movie
      ),
    })),
}));

export default useMovieStore;