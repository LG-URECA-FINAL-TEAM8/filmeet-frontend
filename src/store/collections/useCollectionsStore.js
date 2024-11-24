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
    {
      id: 2,
      name: "홍길동",
      CollectionsName: "로맨틱 코미디",
      description: "기분 좋은 웃음을 줄 수 있는 영화들",
      image: "https://example.com/romcom.jpg",
      profileImage: "https://example.com/profile2.jpg",
      likes: 25,
      commentsCount: 12,
      movies: [
        {
          id: 201,
          title: "노팅힐",
          description: "영화",
          year: 1999,
          image: "https://example.com/nottinghill.jpg",
        },
        {
          id: 202,
          title: "러브 액츄얼리",
          description: "영화",
          year: 2003,
          image: "https://example.com/loveactually.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "김철수",
      CollectionsName: "액션 영화 모음",
      description: "짜릿한 액션 영화의 세계로!",
      image: "https://example.com/action.jpg",
      profileImage: "https://example.com/profile3.jpg",
      likes: 35,
      commentsCount: 20,
      movies: [
        {
          id: 301,
          title: "존 윅",
          description: "영화",
          year: 2014,
          image: "https://example.com/johnwick.jpg",
        },
        {
          id: 302,
          title: "미션 임파서블",
          description: "영화",
          year: 1996,
          image: "https://example.com/missionimpossible.jpg",
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
