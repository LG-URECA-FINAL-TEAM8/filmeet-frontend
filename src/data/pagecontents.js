// data/pageContents.js
import { movies } from './movies';

export const pagecontents = {
  profiles: {
    title: '평가',
    categories: [
      {
        label: '영화',
        count: movies.filter((movie) => movie.rating).length,
      },
    ],
  },
  movieRatingList: {
    title: '평가한 작품들',
    filters: [
      { label: '전체', value: '전체' },
      { label: '별점 순', value: '별점 순' },
    ],
  },
  movieRatingSections: {
    sectionTitle: '평가함',
    noResults: '결과가 없습니다',
    moreButton: '더보기',
    ratings: [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5],
  },
  moreRatingMovies: {
    noResults: '결과가 없습니다.',
  },
};
