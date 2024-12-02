import ReactModal from "react-modal";
import styled from "styled-components";
import useCommentStore from "../../../store/modal/useCommentStore";

const MODALTEXTS = {
  modalTitle: "알림",
  deleteComment: "댓글을 삭제하시겠어요?",
  deleteCommentary: "코멘트를 삭제하시겠어요?",
  cancel: "취소",
  confirm: "확인",
};

ReactModal.setAppElement("#root");

const CommentDeleteModal = ({ onConfirm }) => {
  const { isOpen, modalType, commentData, closeModal } = useCommentStore();

  if (!isOpen || !["deleteComment", "deleteCommentary"].includes(modalType)) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(commentData);
    }
    closeModal();
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <Container>
        <Title>{MODALTEXTS.modalTitle}</Title>
        <Message>{MODALTEXTS[modalType]}</Message>
        <ButtonGroup>
          <CancelButton onClick={closeModal}>{MODALTEXTS.cancel}</CancelButton>
          <Divider />
          <ConfirmButton onClick={handleConfirm}>{MODALTEXTS.confirm}</ConfirmButton>
        </ButtonGroup>
      </Container>
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

const Container = styled.div`
  width: 15rem;
  text-align: center;
  margin: 0 1.25rem;
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-weight: ${(props) => props.theme.font.fontWeightBold};
  font-size: 1.1rem;
  margin: 0;
`;

const Message = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
  margin: 0.5rem 0 1.5rem;
`;

const ButtonGroup = styled.div`
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => props.theme.font.borderDefault};
`;

const CancelButton = styled.button`
  flex: 1;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontPink};
  background: none;
  border: none;
  cursor: pointer;
  margin: 0.69rem 0;
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.color.commentColor};
`;

const ConfirmButton = styled.button`
  flex: 1;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontPink};
  background: none;
  border: none;
  cursor: pointer;
  margin: 0.69rem 0;
`;
