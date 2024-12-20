import SvgDelete from '../../../assets/svg/SvgDelete';
import SvgPencil from '../../../assets/svg/Pencil';
import styled from 'styled-components';
import { ContentText } from '../../../data/movieDetail/text';
import MovieDetailModal from '../../common/modal/MovieDetailModal';
import { useDeleteMyReview } from '../../../apis/reviews/queries';
function CommentCard({ myCommentData, movieId, openModal }) {
  const reviewId = myCommentData?.reviewId;
  const { mutate: deleteReviewMutate } = useDeleteMyReview();
  const handleDeleteClick = (reviewId, movieId) => {
    deleteReviewMutate({ reviewId, movieId });
  };
  return (
    <>
      <S.MyCommentsSection>
        <S.MyCommentsTitle>{ContentText.mycomment}</S.MyCommentsTitle>
        <S.CommentCard>
          <S.ProfileImage src={myCommentData?.userProfileImage} />
          <S.CommentText>{myCommentData?.content}</S.CommentText>
          <S.CommentActions>
            <S.DeleteButton onClick={() => handleDeleteClick(reviewId, movieId)}>
              <SvgDelete width="1rem" height="1rem" /> {ContentText.delete}
            </S.DeleteButton>
            <S.EditButton onClick={openModal}>
              <SvgPencil width="1rem" height="1rem" /> {ContentText.edit}
            </S.EditButton>
          </S.CommentActions>
        </S.CommentCard>
      </S.MyCommentsSection>

      <MovieDetailModal movieId={movieId} reviewId={reviewId} />
    </>
  );
}

export default CommentCard;

const S = {
  MyCommentsSection: styled.div`
    margin: 0 0 0;
    padding: 1rem 0;
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 0.5rem;
  `,

  MyCommentsTitle: styled.h4`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 0.6rem;
  `,
  ProfileImage: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
  `,

  CommentCard: styled.div`
    width: 61rem;
    height: 4.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.color.mainColor};
    border: ${(props) => props.theme.font.borderDefault};
    border-radius: 0.3rem;
  `,

  CommentText: styled.div`
    flex: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    margin: 0 1rem;
  `,

  CommentActions: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
  `,

  EditButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
  `,

  DeleteButton: styled.button`
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    background: none;
    border: none;
    cursor: pointer;
  `,
};
