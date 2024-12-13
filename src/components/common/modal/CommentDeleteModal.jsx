import ReactModal from "react-modal";
import styled from "styled-components";
import useCommentStore from "../../../store/modal/useCommentStore";
import { useDeleteComment, useDeleteReview } from "../../../apis/commentDetails/queries";
import { useNavigate } from "react-router-dom"; 

const MODALTEXTS = {
  modalTitle: "알림",
  deleteComment: "댓글을 삭제하시겠어요?", // 댓글 삭제
  deleteCommentary: "리뷰를 삭제하시겠어요?", // 리뷰 삭제
  cancel: "취소",
  confirm: "확인",
};

ReactModal.setAppElement("#root");

const CommentDeleteModal = () => {
  const { isOpen, modalType, commentData, closeModal } = useCommentStore();
  const { mutate: deleteCommentMutate } = useDeleteComment(); // 댓글 삭제 훅
  const { mutate: deleteReviewMutate } = useDeleteReview(); // 리뷰 삭제 훅
  const navigate = useNavigate(); 

  if (!isOpen || !["deleteComment", "deleteCommentary"].includes(modalType)) return null;

  const handleConfirm = async () => {
    if (modalType === "deleteCommentary" && commentData.reviewId && commentData.movieId) {
      // 리뷰 삭제 API 호출
      deleteReviewMutate(
        { reviewId: commentData.reviewId, movieId: commentData.movieId },
        {
          onSuccess: () => {
            console.log("리뷰가 성공적으로 삭제되었습니다.");
            navigate("/mypage/comments"); 
          },
          onError: (error) => {
            console.error("리뷰 삭제 중 오류 발생:", error);
          },
        }
      );
    } else if (modalType === "deleteComment" && commentData.reviewId && commentData.commentId) {
      // 댓글 삭제 API 호출
      deleteCommentMutate(
        { reviewId: commentData.reviewId, commentId: commentData.commentId },
        {
          onSuccess: () => {
            console.log("댓글이 성공적으로 삭제되었습니다.");
          },
          onError: (error) => {
            console.error("댓글 삭제 중 오류 발생:", error);
          },
        }
      );
    } else {
      console.error("적절한 데이터가 제공되지 않았습니다.");
    }
    closeModal();
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <S.Container>
        <S.Title>{MODALTEXTS.modalTitle}</S.Title>
        <S.Message>{MODALTEXTS[modalType]}</S.Message>
        <S.ButtonGroup>
          <S.CancelButton onClick={closeModal}>{MODALTEXTS.cancel}</S.CancelButton>
          <S.Divider />
          <S.ConfirmButton onClick={handleConfirm}>{MODALTEXTS.confirm}</S.ConfirmButton>
        </S.ButtonGroup>
      </S.Container>
    </ReactModal>
  );
};

export default CommentDeleteModal;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    width: "17.5rem",
    height: "7.5rem",
    margin: "auto",
    borderRadius: "0.62rem",
    padding: "1.25rem 0 0 0",
    overflow: "hidden",
  },
};

const S = {
  Container: styled.div`
    width: 15rem;
    text-align: center;
    margin: 0 1.25rem;
  `,
  Title: styled.h2`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    font-size: 1.1rem;
    margin: 0;
  `,
  Message: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0.5rem 0 1.5rem;
  `,
  ButtonGroup: styled.div`
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: ${(props) => props.theme.font.borderDefault};
  `,
  CancelButton: styled.button`
    flex: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    background: none;
    border: none;
    cursor: pointer;
    margin: 0.69rem 0;
  `,
  Divider: styled.div`
    width: 0.1rem;
    height: 1.5rem;
    background-color: ${(props) => props.theme.color.commentColor};
  `,
  ConfirmButton: styled.button`
    flex: 1;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    background: none;
    border: none;
    cursor: pointer;
    margin: 0.69rem 0;
  `,
};
