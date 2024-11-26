import { create } from "zustand";

const useCollectionsStore = create((set) => ({
  collections: [
    {
      id: 1,
      name: "이성혁",
      CollectionsName: "마블 컬렉션",
      description: "마블 영화를 모아놓은 컬렉션입니다.",
      image: "https://example.com/marvel.jpg",
      profileImage: "https://example.com/profile1.jpg",
      likes: 15,
      commentsCount: 7,
      movies: [
        {
          id: 101,
          title: "아이언맨",
          description: "영화",
          year: 2008,
          image: "https://example.com/ironman.jpg",
        },
        {
          id: 102,
          title: "캡틴 아메리카",
          description: "영화",
          year: 2011,
          image: "https://example.com/captain-america.jpg",
        },
      ],
    },
  ],
  isCreating: false,
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setIsCreating: (status) => set({ isCreating: status }),
  addCollection: (newCollection) =>
    set((state) => ({
      collections: [...state.collections, newCollection],
    })),
  setMovies: (newMovies) =>
    set((state) => ({
      movies: newMovies,
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
}));

export default useCollectionsStore;
