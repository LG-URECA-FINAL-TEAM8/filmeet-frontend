import styled from "styled-components";
import ReactModal from "react-modal";
import useCommentStore from "../../../store/modal/useCommentStore";

ReactModal.setAppElement("#root");

const CommentEditModal = ({ onSubmit }) => {
  const { isOpen, modalType, commentData, comment, closeModal, setComment } = useCommentStore();

  if (!isOpen || (modalType !== "edit" && modalType !== "comment")) return null;

  const handleSave = () => {
    if (onSubmit) {
      onSubmit(comment);
    }
    closeModal();
  };

  const getPlaceholder = () => {
    if (modalType === "edit") {
      return "내용을 수정해주세요.";
    } else if (modalType === "comment") {
      return `"${commentData?.title}"에 대한 생각을 표현해주세요.`;
    }
    return "";
  };
  
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "40rem", 
          height: "29rem",
          margin: "auto",
          borderRadius: "0.62rem",
          padding: "0",
          overflow: "hidden",
        },
      }}
    >
      <Content>
        <CommentHeader>
          <CommentTitle>
            {modalType === "edit" ? `${commentData?.title}` : "댓글"}
          </CommentTitle>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </CommentHeader>
        <CommentContent>
          <TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={getPlaceholder()}
            maxLength={10000}
          />
        </CommentContent>
        <Footer>
          <TextLength>{comment.length}/10000</TextLength>
          <SaveButton onClick={handleSave}>
            {modalType === "edit" ? "수정" : "저장"}
          </SaveButton>
        </Footer>
      </Content>
    </ReactModal>
  );
};

export default CommentEditModal;

const Content = styled.div`
  width: 37.5rem;
  height: 26.87rem;
  padding: 1.125rem 1.25rem 1.125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentTitle = styled.div`
  text-align: left;
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1.12rem;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.06rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem; 
  color: ${(props) => props.theme.color.fontGray};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

const CommentContent = styled.div`
  flex: 1;
  margin: 0.62rem 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 20.62rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  padding: 0;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  resize: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.06rem;
`;

const TextLength = styled.div`
  font-size: 0.87rem;
  color: ${(props) => props.theme.color.fontGray || "#333"};
`;

const SaveButton = styled.button`
  width: 5rem;
  height: 2.25rem;
  background-color: ${(props) => props.theme.color.primary || "#ff69b4"};
  color: white;
  font-size: 0.87rem;
  border: none;
  cursor: pointer;
  border-radius: 0.25rem;

  &:hover {
    background-color: ${(props) => props.theme.color.primaryHover || "#ff85a2"};
  }
`;
