export const movieData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `영화 제목 ${index + 1}`,
  year: 2023,
  genre: "장르",
  image: `https://via.placeholder.com/300x400`,
}));
