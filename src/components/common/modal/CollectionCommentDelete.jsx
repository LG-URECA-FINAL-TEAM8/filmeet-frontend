import ReactModal from "react-modal";
import styled from "styled-components";
import { useDeleteComment } from "../../../apis/myPage/collection/queries";
import useCommentDeleteStore from "../../../store/collections/useCommentDeleteStore";

const MODALTEXTS = {
  modalTitle: "알림",
  deleteComment: "댓글을 정말 삭제하시겠어요?",
  cancel: "취소",
  confirm: "확인",
};

ReactModal.setAppElement("#root");

const CollectionCommentDelete = () => {
  const { isModalOpen, closeModal, selectedComment } = useCommentDeleteStore();
  const { mutate: deleteComment } = useDeleteComment();

  const handleConfirm = async () => {
    if (!selectedComment) {
      return;
    }

    const { collectionId, collectionCommentId } = selectedComment;

    deleteComment(
      { collectionId, collectionCommentId },
      {
        onSuccess: () => {
          closeModal();
        },
        onError: (error) => {
          console.error("댓글 삭제 실패:", error);
        },
      }
    );
  };

  if (!isModalOpen) return null; // 모달이 닫혀 있으면 렌더링 X

  return (
    <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <S.Container>
        <S.Title>{MODALTEXTS.modalTitle}</S.Title>
        <S.Message>{MODALTEXTS.deleteComment}</S.Message>
        <S.ButtonGroup>
          <S.CancelButton onClick={closeModal}>{MODALTEXTS.cancel}</S.CancelButton>
          <S.Divider />
          <S.ConfirmButton onClick={handleConfirm}>{MODALTEXTS.confirm}</S.ConfirmButton>
        </S.ButtonGroup>
      </S.Container>
    </ReactModal>
  );
};

export default CollectionCommentDelete;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    width: "17.5rem",
    height: "7.5rem",
    margin: "auto",
    borderRadius: "0.6rem",
    padding: "1.2rem 0 0 0",
    overflow: "hidden",
  },
};

const S = {
  Container: styled.div`
    width: 15rem;
    margin: 0 1.25rem;
    text-align: center;
  `,

  Title: styled.h2`
    margin: 0;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.1rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
  `,

  Message: styled.div`
    margin: 0.5rem 0 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  ButtonGroup: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
    border-top: ${(props) => props.theme.font.borderDefault};
  `,

  CancelButton: styled.button`
    flex: 1;
    margin: 0.7rem 0;
    background: none;
    border: none;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    cursor: pointer;
  `,

  Divider: styled.div`
    width: 0.1rem;
    height: 1.5rem;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  ConfirmButton: styled.button`
    flex: 1;
    margin: 0.7rem 0;
    background: none;
    border: none;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
    cursor: pointer;
  `,
};

