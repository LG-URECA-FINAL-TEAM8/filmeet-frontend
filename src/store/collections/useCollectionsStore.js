import { create } from "zustand";
import { getUserCollections, searchMovies } from "../../apis/myPage/collection/collection";
import { getCollectionDetail, getCollectionMovies } from "../../apis/myPage/collection/collectiondetail";

const useCollectionsStore = create((set) => ({
  collections: [],
  isLoading: false,
  error: null,
  searchResults: [], // 검색 결과 상태 추가
  searchLoading: false, // 검색 로딩 상태 추가
  collectionMovies: [], // 특정 컬렉션의 영화 목록
  collectionMoviesLoading: false, // 영화 로딩 상태
  collectionMoviesError: null, // 영화 로딩 에러 상태
  
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

  // 영화 검색 API 호출
  fetchSearchMovies: async (keyword, page = 0, size = 10) => {
    if (!keyword.trim()) {
      set({ searchResults: [], searchLoading: false });
      return;
    }
    set({ searchLoading: true });
    try {
      const response = await searchMovies(keyword, page, size);
      const movies = response.data.content.map((movie) => ({
        id: movie.movieId,
        title: movie.title,
        image: movie.posterUrl,
        releaseDate: movie.releaseDate,
      }));
      set({ searchResults: movies, searchLoading: false });
    } catch (error) {
      console.error("Error fetching search movies:", error);
      set({ searchResults: [], searchLoading: false });
    }
  },

  resetSearchResults: () => set({ searchResults: [] }), // 검색 결과 초기화

  // 특정 컬렉션의 영화 목록 불러오기
  fetchCollectionMovies: async (collectionId, page = 0, size = 20) => {
    set({ collectionMoviesLoading: true, collectionMoviesError: null });
    try {
      const response = await getCollectionMovies(collectionId, page, size);
      set({
        collectionMovies: response.data.content, // 영화 목록 설정
        collectionMoviesLoading: false,
      });
    } catch (error) {
      console.error("Error fetching collection movies:", error);
      set({
        collectionMovies: [],
        collectionMoviesLoading: false,
        collectionMoviesError: error,
      });
    }
  },

  // 컬렉션 상세 데이터 불러오기
  fetchCollectionDetail: async (collectionId) => {
    set({ isLoading: true, error: null });
    try {
      const response = await getCollectionDetail(collectionId);
      set({ collectionDetail: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching collection detail:", error);
      set({ error, isLoading: false });
    }
  },

  // 삭제 후 상태 업데이트
  removeCollectionFromState: (collectionId) => {
    set((state) => ({
      collections: state.collections.filter((collection) => collection.collectionId !== collectionId),
    }));
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
