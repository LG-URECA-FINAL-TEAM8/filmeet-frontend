import { create } from "zustand";

const useRatingsStore = create((set) => ({
  activeFilter: "전체",
  setActiveFilter: (filter) => set({ activeFilter: filter }),

  movies: [
    {
      id: 1,
      title: "정년이",
      rating: 5.0,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      title: "스파이더맨: 뉴 유니버스",
      rating: 4.5,
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      title: "와우",
      rating: 5.0,
      image: "path/to/image3.jpg",
    },
  ],
}));

export default useRatingsStore;
