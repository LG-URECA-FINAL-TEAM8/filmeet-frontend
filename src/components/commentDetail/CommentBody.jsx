import styled from "styled-components";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgComment from "../../assets/svg/Comment";
import { pagecontents } from "../../data/pagecontents";
import { useLikesStore } from "../../store/comment/useLikesStore";
import useCommentStore from "../../store/modal/useCommentStore";
import { useLikeReview, useCancelLikeReview } from "../../apis/commentDetails/queries"; // 좋아요, 좋아요 취소 훅 가져오기
import { useEffect, useState } from "react";

const CommentBody = ({ commentData, reviewId }) => {
  const { initializeLikes, toggleLikeStatus } = useLikesStore(); // 좋아요 상태 관리
  const { like, comment } = pagecontents.commentPageContent;
  const { openModal } = useCommentStore();

  const { mutate: likeReviewMutate } = useLikeReview();
  const { mutate: cancelLikeMutate } = useCancelLikeReview();

  const [isLiked, setIsLiked] = useState(false);
  const [likeCounts, setLikeCounts] = useState(0);
  const [liking, setLiking] = useState(false); // 요청 중 상태

  // 좋아요 초기화
  useEffect(() => {
    if (reviewId && commentData) {
      initializeLikes(commentData.id, commentData.isLiked || false, commentData.likeCounts || 0);
      setIsLiked(commentData.isLiked || false);
      setLikeCounts(commentData.likeCounts || 0);
    }
  }, [reviewId, commentData, initializeLikes]);

  const handleLikeClick = async () => {
    if (liking) return; // 요청 중인 경우 중복 요청 방지
    setLiking(true);

    try {
      if (isLiked) {
        await cancelLikeMutate(reviewId, {
          onSuccess: () => {
            setIsLiked(false);
            setLikeCounts((prev) => prev - 1);
            toggleLikeStatus(commentData.id, false);
          },
          onError: (error) => {
            console.error("좋아요 취소 중 오류 발생:", error);
          },
        });
      } else {
        await likeReviewMutate(reviewId, {
          onSuccess: () => {
            setIsLiked(true);
            setLikeCounts((prev) => prev + 1);
            toggleLikeStatus(commentData.id, true);
          },
          onError: (error) => {
            console.error("좋아요 중 오류 발생:", error);
          },
        });
      }
    } catch (error) {
      console.error("좋아요 상태 변경 중 오류 발생:", error);
    } finally {
      setLiking(false); // 요청 완료 후 상태 초기화
    }
  };

  const handleCommentClick = () => {
    console.log("리뷰 ID 확인:", reviewId);
    openModal("comment", {
      reviewId,
      movieTitle: commentData?.movieTitle,
      content: "",
    });
  };

  return (
    <S.Body>
      {/* 좋아요 버튼 */}
      <S.ActionContainer onClick={handleLikeClick}>
        <S.Action isLiked={isLiked}>
          <S.StyledSvgIcLikeFilled24 isLiked={isLiked} />
          {like} ({likeCounts})
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
