import ReactModal from 'react-modal';
import styled from 'styled-components';
import useCommentStore from '../../../store/modal/useCommentStore';
import { useDeleteComment, useDeleteReview } from '../../../apis/commentDetails/queries';
import { useNavigate } from 'react-router-dom';
import { pagecontents } from '../../../data/pagecontents';

ReactModal.setAppElement('#root');

const CommentDeleteModal = () => {
  const { isOpen, modalType, commentData, closeModal } = useCommentStore();
  const { mutate: deleteCommentMutate } = useDeleteComment(); // 댓글 삭제 훅
  const { mutate: deleteReviewMutate } = useDeleteReview();
  const navigate = useNavigate();
  const { deleteCommentary, deleteListComment, alarm, cancel, confirm } =
    pagecontents.commentPageContent;

  if (!isOpen || !['deleteComment', 'deleteCommentary'].includes(modalType)) return null;

  const handleConfirm = async () => {
    if (modalType === 'deleteCommentary') {
      deleteReviewMutate({
        reviewId: commentData?.reviewId,
        movieId: commentData?.movieId,
      });
      navigate('/mypage/comments');
    } else if (modalType === 'deleteComment') {
      deleteCommentMutate({
        reviewId: commentData?.reviewId,
        commentId: commentData?.commentId,
      });
    }
    closeModal();
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <S.Container>
        <S.Title>{alarm}</S.Title>
        <S.Message>
          {modalType === 'deleteCommentary' ? deleteCommentary : deleteListComment}
        </S.Message>
        <S.ButtonGroup>
          <S.CancelButton onClick={closeModal}>{cancel}</S.CancelButton>
          <S.Divider />
          <S.ConfirmButton onClick={handleConfirm}>{confirm}</S.ConfirmButton>
        </S.ButtonGroup>
      </S.Container>
    </ReactModal>
  );
};

export default CommentDeleteModal;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    width: '17.5rem',
    height: '8.5rem',
    margin: 'auto',
    borderRadius: '0.6rem',
    padding: '1.25rem 0 0 0',
    overflow: 'hidden',
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
    margin: 0.7rem 0;
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
    margin: 0.7rem 0;
  `,
};
