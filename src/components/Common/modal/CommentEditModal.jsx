import styled from "styled-components";
import ReactModal from "react-modal";
import useCommentStore from "../../../store/modal/useCommentStore";
import { useState } from "react";

ReactModal.setAppElement("#root");

const CommentEditModal = ({ onSubmit }) => {
  const { isOpen, closeModal, modalType } = useCommentStore();
  const [comment, setComment] = useState("");

  if (modalType !== "edit" || !isOpen) return null;

  const handleSave = () => {
    if (onSubmit) {
      onSubmit(comment);
    }
    closeModal();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: "640px",
          height: "464px",
          margin: "auto",
          borderRadius: "10px",
          padding: "0",
          overflow: "hidden",
        },
      }}
    >
      <Content>
        <CommentHeader>
          <CommentTitle>제목</CommentTitle>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </CommentHeader>
        <CommentContent>
          <TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="내용을 입력해주세요."
            maxLength={10000}
          />
        </CommentContent>
        <Footer>
          <TextLength>{comment.length}/10000</TextLength>
          <SaveButton onClick={handleSave}>수정</SaveButton>
          </Footer>
      </Content>
    </ReactModal>
  );
};

export default CommentEditModal;


const Content = styled.div`
  width: 600px;
  height: 430px;
  padding: 18px 20px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentTitle = styled.div`
  text-align: left;
  font-size: 18px;
`

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${(props) => props.theme.color.fontGray || "#333"};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.primary || "#007bff"};
  }
`;

const CommentContent = styled.div`
  flex: 1;
  margin: 10px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 330px;
  border: none; 
  outline: none;
  border-radius: 4px;
  padding: 0px;
  font-size: 16px;
  resize: none;
`;

const Footer = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
;
`;

const TextLength = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.color.fontGray || "#333"};
`;

const SaveButton = styled.button`
  width: 80px;
  height: 36px;
  background-color: ${(props) => props.theme.color.primary || "#ff69b4"};
  color: white;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.color.primaryHover || "#ff85a2"};
  }
`;
