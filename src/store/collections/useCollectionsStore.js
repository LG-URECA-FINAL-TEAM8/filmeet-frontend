import { create } from "zustand";
import collectionsData from "../../data/collections";

const useCollectionsStore = create((set) => ({
  collections: collectionsData,

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
      collections: [...state.collections, newCollection],
    })),

  addMoviesToCollection: (collectionId, moviesToAdd) =>
    set((state) => ({
      collections: state.collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              movies: [...collection.movies, ...moviesToAdd],
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
      tempSelectedMovies: state.tempSelectedMovies.find(
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
        ...state.selectedMovies,
        ...state.tempSelectedMovies.filter(
          (movie) => !state.selectedMovies.some((m) => m.id === movie.id)
        ),
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
    }),

  enableEditMode: () => set({ isEditing: true }),
  disableEditMode: () => set({ isEditing: false }),

  // -------------------- 추가된 부분 --------------------
  selectedCollection: null, // 선택된 컬렉션 상태 추가

  // 선택된 컬렉션을 설정하는 함수 추가
  setSelectedCollection: (collection) => set({ selectedCollection: collection }),
  // ------------------------------------------------------
}));

export default useCollectionsStore;