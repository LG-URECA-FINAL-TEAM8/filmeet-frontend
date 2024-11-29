import ReactModal from "react-modal";
import useCommentStore from "../../../store/modal/useCommentStore";
import styled from "styled-components";


ReactModal.setAppElement("#root");

const CommentDeleteModal = () => {
  const { isOpen, modalType, closeModal } = useCommentStore();

  if (!isOpen || modalType !== "delete") return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          width: "280px",
          height: "120px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px 0 0 0",
          overflow: "hidden",
        },
      }}
    >
      <Container>
        <Title>알림</Title>
        <Comment>코멘트를 삭제하시겠어요?</Comment>
        <ButtonsContent>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <Divider />
          <ConfirmButton>확인</ConfirmButton>
        </ButtonsContent>
      </Container>
    </ReactModal>
  );
};

const Container = styled.div`
  width: 240px;
  text-align: center;
  margin: 0 20px 0 20px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  width: 240px;
  height: 24px;
  margin: 0 0 0 0;
  font-family: ${(props) => props.theme.font.fontSuitBold};
`;

const Comment = styled.div`
  width: 240px;
  height: 20px;
  padding: 0 0 24px 0;
  margin: 8px 0 0 0;
  font-size: 15px;
  color: #333;
  line-height: 20px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const ButtonsContent = styled.div`
  width: 240px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => props.theme.font.borderDefault};
`;

const CancelButton = styled.button`
  flex: 1;
  font-size: 16px;
  color: ${(props) => props.theme.color.fontPink};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 0 0;
  margin: 11px 0px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const Divider = styled.div`
  width: 1px;
  height: 50%;
  background-color: #ddd;
`;

const ConfirmButton = styled.button`
  flex: 1;
  font-size: 16px;
  color: ${(props) => props.theme.color.fontPink};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 0 0;
  margin: 11px 0px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

export default CommentDeleteModal;
