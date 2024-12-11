import { create } from "zustand";
import { getUserCollections } from "../../apis/myPage/collection/collection";

const useCollectionsStore = create((set) => ({
  collections: [],
  isLoading: false,
  error: null,

  // 서버에서 컬렉션 데이터 불러오기
  fetchCollections: async (userId, page = 0, size = 10) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getUserCollections(userId, page, size);
      set({ collections: response.data.content, isLoading: false });
    } catch (error) {
      console.error("Error fetching collections:", error);
      set({ error, isLoading: false });
    }
  },

  isCreating: false,
  isModalOpen: false,
  isDropdownOpen: false,

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  openDropdownMenu: () => set({ isDropdownOpen: true }),
  closeDropdownMenu: () => set({ isDropdownOpen: false }),
  setIsCreating: (status) => set({ isCreating: status }),

  addCollection: (newCollection) =>
    set((state) => ({
      collections: state.collections.some(
        (collection) => collection.id === newCollection.id
      )
        ? state.collections
        : [...state.collections, newCollection],
    })),

  addMoviesToCollection: (collectionId, moviesToAdd) =>
    set((state) => ({
      collections: state.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              movies: [
                ...collection.movies,
                ...moviesToAdd.filter(
                  (movie) => !collection.movies.some((m) => m.id === movie.id)
                ),
              ],
            }
          : collection
      ),
    })),

  title: "",
  description: "",
  selectedMovies: [],
  moviesToRemove: [],
  isEditing: false,
  searchTerm: "",
  tempSelectedMovies: [],

  setTitle: (newTitle) => set({ title: newTitle }),
  setDescription: (newDescription) => set({ description: newDescription }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  addMovies: (movies) =>
    set((state) => ({
      selectedMovies: [
        ...state.selectedMovies,
        ...movies.filter(
          (movie) => !state.selectedMovies.some((m) => m.id === movie.id)
        ),
      ],
    })),

  toggleMovieSelection: (movie) =>
    set((state) => ({
      tempSelectedMovies: state.tempSelectedMovies.some(
        (selectedMovie) => selectedMovie.id === movie.id
      )
        ? state.tempSelectedMovies.filter(
            (selectedMovie) => selectedMovie.id !== movie.id
          )
        : [...state.tempSelectedMovies, movie],
    })),

  confirmTempSelectedMovies: () =>
    set((state) => ({
      selectedMovies: [
        ...new Set([
          ...state.selectedMovies,
          ...state.tempSelectedMovies,
        ]),
      ],
      tempSelectedMovies: [],
    })),

  toggleMovieToRemove: (movieId) =>
    set((state) => ({
      moviesToRemove: state.moviesToRemove.includes(movieId)
        ? state.moviesToRemove.filter((id) => id !== movieId)
        : [...state.moviesToRemove, movieId],
    })),

  removeSelectedMovies: () =>
    set((state) => ({
      selectedMovies: state.selectedMovies.filter(
        (movie) => !state.moviesToRemove.includes(movie.id)
      ),
      moviesToRemove: [],
      isEditing: false,
    })),

  resetFields: () =>
    set({
      title: "",
      description: "",
      selectedMovies: [],
      moviesToRemove: [],
      searchTerm: "",
      tempSelectedMovies: [],
      selectedCollection: null,
    }),

  enableEditMode: () => set({ isEditing: true }),
  disableEditMode: () => set({ isEditing: false }),

  selectedCollection: null,

  setSelectedCollection: (collection) =>
    set({
      selectedCollection: collection,
      title: collection.name || "",
      description: collection.description || "",
      selectedMovies: collection.movies || [],
    }),
}));

export default useCollectionsStore;
