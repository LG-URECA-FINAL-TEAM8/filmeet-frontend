export const groupMoviesByRating = (movies, ratings) => {
  const groupedMovies = ratings.reduce((acc, rating) => {
    acc[rating] = [];
    return acc;
  }, {});

  movies.forEach((movie) => {
    const ratingKey = ratings.find((rating) => rating === movie.ratingScore);
    if (ratingKey !== undefined) {
      groupedMovies[ratingKey].push(movie);
    }
  });

  return groupedMovies;
};
