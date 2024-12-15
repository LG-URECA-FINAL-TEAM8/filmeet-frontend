import styled from "styled-components";
import ReactModal from "react-modal";
import useCommentsStore from "../../../../store/collections/useCommentsStore";
import { useUpdateComment } from "../../../../apis/myPage/collection/queries";

const EditModal = () => {
  const { isModalOpen, closeModal, commentContent, setCommentContent, collectionCommentId } = useCommentsStore();
  const { mutate: updateCommentMutation, isLoading } = useUpdateComment();

  const handleSave = () => {
    if (!commentContent.trim()) {
      return;
    } 
    updateCommentMutation(
      {
        collectionCommentId,
        commentContent,
      },
      {
        onSuccess: () => {
          closeModal();
        },
      }
    );
  };

  return (
    <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <S.Content>
        <S.CommentHeader>
          <S.CommentTitle>댓글 수정</S.CommentTitle>
          <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.CommentHeader>
        <S.CommentContent>
          <S.TextArea
            value={commentContent?.comment}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="내용을 수정해주세요."
          />
        </S.CommentContent>
        <S.Footer>
          <S.SaveButton onClick={handleSave} disabled={isLoading}>
            {isLoading ? "수정 중..." : "수정"}
          </S.SaveButton>
        </S.Footer>
      </S.Content>
    </ReactModal>
  );
};

export default EditModal;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "40rem",
    height: "29rem",
    margin: "auto",
    borderRadius: "0.6rem",
    padding: "0",
    overflow: "hidden",
  },
};

const S = {
  Content: styled.div`
    width: 37.5rem;
    height: 27rem;
    padding: 1.12rem 1.25rem 1.12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  CommentHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
  `,
  CommentTitle: styled.div`
    text-align: left;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.2rem;
  `,
  CloseButton: styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
  `,
  CommentContent: styled.div`
    flex: 1;
    margin: 0.6rem 0;
  `,
  TextArea: styled.textarea`
    width: 100%;
    min-height: 21rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    padding: 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    resize: none;
  `,
  Footer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
  `,
  SaveButton: styled.button`
    width: 5rem;
    height: 2rem;
    background-color: ${(props) => props.theme.color.fontPink};
    color: ${(props) => props.theme.color.mainColor};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    border: none;
    cursor: pointer;
    border-radius: 0.25rem;
  `,
};