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

  commentPageContent: {
    likeComment: "좋아요",
    likeCount: "0",
    comment: "댓글",
    like: "좋아요",
    edit: "수정",
    count: "0",
    deleteText: "삭제",
    editComment: "댓글 수정",
    deleteComment: "댓글 삭제",
    noComments: "댓글이 없습니다.",
    deleteCommentary: "리뷰를 삭제하시겠어요?",
    deleteListComment: "댓글을 삭제하시겠어요?",
    alarm: "알림",
    cancel: "취소",
    confirm: "확인"
  },
};
