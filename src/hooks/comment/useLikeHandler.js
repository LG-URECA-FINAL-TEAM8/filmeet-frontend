export const handleLikeClick = async ({
  commentData,
  reviewId,
  likeReviewMutate,
  cancelLikeMutate,
}) => {
  try {
    if (commentData?.isLiked) {
      await cancelLikeMutate(reviewId); // 좋아요 취소 호출
    } else {
      await likeReviewMutate(reviewId); // 좋아요 추가 호출
    }
  } catch (error) {
    console.error('좋아요 상태 변경 중 오류 발생:', error);
  }
};
