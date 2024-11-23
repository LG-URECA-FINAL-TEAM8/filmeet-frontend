export const groupMoviesByRating = (movies, ratings) => {
  // ratings 배열의 각 값을 초기화 (빈 배열로)
  const groupedMovies = ratings.reduce((acc, rating) => {
    acc[rating] = [];
    return acc;
  }, {});

  // movies 배열을 순회하며 해당 별점 그룹에 영화 추가
  movies.forEach((movie) => {
    const ratingKey = ratings.find((rating) => rating === movie.rating);
    if (ratingKey !== undefined) {
      groupedMovies[ratingKey].push(movie);
    }
  });

  return groupedMovies;
};
