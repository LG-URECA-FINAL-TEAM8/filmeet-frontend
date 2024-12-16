import styled from 'styled-components';
import SvgIcLikeFilled24 from '../../assets/svg/IcLikeFilled24';
import SvgComment from '../../assets/svg/Comment';
import { pagecontents } from '../../data/pagecontents';
import useCommentStore from '../../store/modal/useCommentStore';
import { useLikeReview, useCancelLikeReview } from '../../apis/commentDetails/queries'; // 좋아요, 좋아요 취소 훅 가져오기
import { handleLikeClick } from '../../hooks/comment/useLikeHandler';
const CommentBody = ({ commentData, reviewId }) => {
  const { like, comment } = pagecontents.commentPageContent;
  const { openModal } = useCommentStore();

  const { mutate: likeReviewMutate } = useLikeReview();
  const { mutate: cancelLikeMutate } = useCancelLikeReview();

  const handleActionClick = () => {
    handleLikeClick({
      commentData,
      reviewId,
      likeReviewMutate,
      cancelLikeMutate,
    });
  };

  const handleCommentClick = () => {
    openModal('comment', {
      reviewId,
      movieTitle: commentData?.movieTitle,
      content: '',
    });
  };

  return (
    <S.Body>
      {/* 좋아요 버튼 */}
      <S.ActionContainer onClick={handleActionClick}>
        <S.Action isLiked={commentData?.isLiked}>
          <S.StyledSvgIcLikeFilled24 isLiked={commentData?.isLiked} />
          {like}
        </S.Action>
      </S.ActionContainer>
      <S.Divider />
      {/* 댓글 버튼 */}
      <S.ActionContainer onClick={handleCommentClick}>
        <S.Action>
          <SvgComment />
          {comment}
        </S.Action>
      </S.ActionContainer>
    </S.Body>
  );
};

export default CommentBody;

const S = {
  Body: styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.mainColor};
    border-top: ${(props) => props.theme.font.borderDefault};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  StyledSvgIcLikeFilled24: styled(SvgIcLikeFilled24)`
    width: 1rem;
    height: 1rem;
    color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
  `,

  ActionContainer: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.mainColor};
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.commentColor};
      border-radius: 0.3rem;
      box-shadow: 0 0.12rem 0.37rem rgba(0, 0, 0, 0.2);
    }
  `,

  Divider: styled.div`
    width: 0.1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  Action: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};

    svg {
      width: 1rem;
      height: 1rem;
    }
  `,
};
