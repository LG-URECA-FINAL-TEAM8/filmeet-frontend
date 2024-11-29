import styled from "styled-components";
import ReactModal from "react-modal";
import useCommentStore from "../../../store/modal/useCommentStore";

ReactModal.setAppElement("#root");

const CommentEditModal = ({ onSubmit }) => {
  const { isOpen, closeModal } = useCommentStore();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          width: "640px",
          height: "464px",
          margin: "auto",
          borderRadius: "10px",
          padding: "1rem,0,0,0",
          overflow: "hidden",
        },
      }}
    >
    <Content>
      <CommentTitle>제목</CommentTitle>
      <CommentContent>내용</CommentContent>
      <CommentButton>저장</CommentButton>
    </Content>
    </ReactModal>
  );
};

export default CommentEditModal;

export const Content = styled.div`
    width: 600px;
    height: 430px;
    padding: 1rem 1.25rem 1.125rem 1.25rem;
`;
export const CommentTitle = styled.div`
    width: 600px;
    height: 24px;
    margin: 0 0 1rem 0;
`;
export const CommentContent = styled.div`
    width: 600px;
    height: 362px;
`;
export const CommentButton = styled.div`
    width: 600px;
    height: 44px;
`;
