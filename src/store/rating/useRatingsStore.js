import { create } from 'zustand';

const useRatingsStore = create((set, get) => ({
  activeFilter: '전체',
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

  // 필터링된 영화 리스트 반환
  filteredMovies: () => {
    const { movies, activeFilter } = get();

    if (activeFilter === "전체") {
      return movies; // 전체 영화
    }

    if (activeFilter === "별점 순") {
      return [...movies].sort((a, b) => b.rating - a.rating);
    }

    return movies;
  },

  // 별점 기준으로 그룹화된 영화 반환
  groupedByRatings: () => {
    const { movies } = get();
    const grouped = {};

    // 5.0부터 0.5까지 그룹 초기화
    for (let i = 5.0; i >= 0.5; i -= 0.5) {
      grouped[i.toFixed(1)] = [];
    }

    // 영화 데이터를 별점 기준으로 그룹화
    movies.forEach((movie) => {
      const ratingKey = movie.rating.toFixed(1); // "5.0", "4.5" 형식
      grouped[ratingKey].push(movie);
    });

    return grouped;
  },
}));

export default useRatingsStore;
