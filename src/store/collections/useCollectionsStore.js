import { create } from "zustand";

const useCollectionsStore = create((set) => ({
  // 초기 컬렉션 데이터
  collections: [
    {
      id: 1,
      name: "이성혁",
      collectionsName: "마블 컬렉션",
      description: "마블 영화를 모아놓은 컬렉션입니다.",
      image: "https://via.placeholder.com/640x280",
      profileImage: "https://via.placeholder.com/32x32",
      likes: 15,
      commentsCount: 7,
      movies: [
        {
          id: 101,
          title: "아이언맨",
          description: "영화",
          year: 2008,
          image: "https://via.placeholder.com/140x200",
        },
        {
          id: 102,
          title: "캡틴 아메리카",
          description: "영화",
          year: 2011,
          image: "https://via.placeholder.com/140x200",
        },
      ],
    },
    {
      id: 2,
      name: "이성혁",
      collectionsName: "마블 컬렉션",
      description: "마블 영화를 모아놓은 컬렉션입니다.",
      image: "https://via.placeholder.com/640x280",
      profileImage: "https://via.placeholder.com/32x32",
      likes: 15,
      commentsCount: 7,
      movies: [
        {
          id: 101,
          title: "아이언맨",
          description: "영화",
          year: 2008,
          image: "https://via.placeholder.com/140x200",
        },
        {
          id: 102,
          title: "캡틴 아메리카",
          description: "영화",
          year: 2011,
          image: "https://via.placeholder.com/140x200",
        },
      ],
    },
  ],

  // 공통 상태
  isCreating: false,
  isModalOpen: false,
  isDropdownOpen: false,

  // 공통 메서드
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

  // CreateCollection 전용 상태
  title: "",
  description: "",
  selectedMovies: [],
  moviesToRemove: [],
  isEditing: false,
  searchTerm: "",
  tempSelectedMovies: [], // 임시 선택된 영화 상태 추가

  // CreateCollection 전용 메서드
  setTitle: (newTitle) => set({ title: newTitle }),
  setDescription: (newDescription) => set({ description: newDescription }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // 선택된 영화 추가
  addMovies: (movies) =>
    set((state) => ({
      selectedMovies: [
        ...state.selectedMovies,
        ...movies.filter(
          (movie) => !state.selectedMovies.some((m) => m.id === movie.id)
        ),
      ],
    })),

  // 영화 선택 또는 해제
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

  // 임시 선택된 영화들 추가
  confirmTempSelectedMovies: () =>
    set((state) => ({
      selectedMovies: [
        ...state.selectedMovies,
        ...state.tempSelectedMovies.filter(
          (movie) => !state.selectedMovies.some((m) => m.id === movie.id)
        ),
      ],
      tempSelectedMovies: [], // 임시 상태 초기화
    })),

  // 선택된 영화에서 제거할 영화 선택
  toggleMovieToRemove: (movieId) =>
    set((state) => ({
      moviesToRemove: state.moviesToRemove.includes(movieId)
        ? state.moviesToRemove.filter((id) => id !== movieId)
        : [...state.moviesToRemove, movieId],
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

  removeSelectedMovies: () =>
    set((state) => ({
      selectedMovies: state.selectedMovies.filter(
        (movie) => !state.moviesToRemove.includes(movie.id)
      ),
      moviesToRemove: [],
      isEditing: false,
    })),
}));

export default useCollectionsStore;
