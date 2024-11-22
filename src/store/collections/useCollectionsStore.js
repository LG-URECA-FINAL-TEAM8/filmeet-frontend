import { create } from "zustand";

const useCollectionsStore = create((set) => ({
  collections: [
    {
      id: 1,
      name: "이성혁",
      CollectionsName: "컬렉션 제목",
      description: "컬렉션 설명",
      image: "https://example.com/marvel.jpg", // 대표 이미지
      profileImage: "https://example.com/profile1.jpg", // 프로필 이미지 추가
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
      CollectionsName: "액션 영화 모음",
      description: "박진감 넘치는 액션 영화들",
      image: "https://example.com/action.jpg", // 대표 이미지
      profileImage: "https://example.com/profile2.jpg", // 프로필 이미지 추가
      likes: 20,
      commentsCount: 8,
      movies: [
        {
          id: 201,
          title: "어벤져스",
          description: "영화",
          year: 2012,
          image: "https://example.com/avengers.jpg",
        },
        {
          id: 202,
          title: "가디언즈 오브 갤럭시",
          description: "영화",
          year: 2014,
          image: "https://example.com/guardians.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "김영희",
      CollectionsName: "로맨틱 영화 모음",
      description: "감성적인 로맨스 영화들",
      image: "https://example.com/romance.jpg",
      profileImage: "https://example.com/profile3.jpg",
      likes: 30,
      commentsCount: 12,
      movies: [
        {
          id: 301,
          title: "노트북",
          description: "영화",
          year: 2004,
          image: "https://example.com/notebook.jpg",
        },
        {
          id: 302,
          title: "어바웃 타임",
          description: "영화",
          year: 2013,
          image: "https://example.com/about-time.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "박철수",
      CollectionsName: "SF 영화 모음",
      description: "미래와 우주를 그린 SF 영화들",
      image: "https://example.com/scifi.jpg",
      profileImage: "https://example.com/profile4.jpg",
      likes: 25,
      commentsCount: 10,
      movies: [
        {
          id: 401,
          title: "인터스텔라",
          description: "영화",
          year: 2014,
          image: "https://example.com/interstellar.jpg",
        },
        {
          id: 402,
          title: "인셉션",
          description: "영화",
          year: 2010,
          image: "https://example.com/inception.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "최미나",
      CollectionsName: "코미디 영화 모음",
      description: "웃음 가득한 코미디 영화들",
      image: "https://example.com/comedy.jpg",
      profileImage: "https://example.com/profile5.jpg",
      likes: 40,
      commentsCount: 18,
      movies: [
        {
          id: 501,
          title: "슈퍼배드",
          description: "영화",
          year: 2010,
          image: "https://example.com/despicable-me.jpg",
        },
        {
          id: 502,
          title: "행오버",
          description: "영화",
          year: 2009,
          image: "https://example.com/hangover.jpg",
        },
      ],
    },
  ],
  isCreating: false,
  setIsCreating: (status) => set({ isCreating: status }),
  addCollection: (newCollection) =>
    set((state) => ({
      collections: [...state.collections, newCollection],
    })),
  setMovies: (newMovies) => set({ movies: newMovies }), // 영화 데이터 업데이트 함수
}));

export default useCollectionsStore;
