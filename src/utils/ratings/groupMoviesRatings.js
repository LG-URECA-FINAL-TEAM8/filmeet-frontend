// src/utils/movieUtils.js
export const groupMoviesByRatings = (movies) => {
    const grouped = {};
  
    // 5.0부터 0.5까지 그룹 초기화
    for (let i = 5.0; i >= 0.5; i -= 0.5) {
      grouped[i.toFixed(1)] = [];
    }
  
    // 영화 데이터를 별점 기준으로 그룹화
    movies.forEach((movie) => {
      const ratingKey = movie.rating.toFixed(1); // "5.0", "4.5" 형식
      if (grouped[ratingKey]) {
        grouped[ratingKey].push(movie);
      }
    });
  
    return grouped;
  };
  