import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import useMovieCommentStore from "../../../store/moviedetail/useMovieCommentStore";

const MovieDetailModal = () => {
  const { isModalOpen: isOpen, closeModal, comment, setComment } = useMovieCommentStore();

  const handleChange = (e) => {
    setComment(e.target.value); 
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <S.Content>
        <S.CommentHeader>
          <S.CommentTitle>코멘트</S.CommentTitle>
          <S.CloseButton onClick={closeModal}>X</S.CloseButton>
        </S.CommentHeader>
        <S.CommentContent>
          <S.TextArea
            value={comment}
            onChange={handleChange}
            placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
          />
        </S.CommentContent>
        <S.Footer>
          <S.TextLength>{comment.length}/10000</S.TextLength>
          <S.SaveButton>저장</S.SaveButton>
        </S.Footer>
      </S.Content>
    </ReactModal>
  );
};

const customStyles = {
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
};

const S = {
    Content: styled.div`
      width: 37.5rem;
      height: 26.87rem;
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
      font-size: 1.12rem;
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
      margin: 0.62rem 0;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
    `,
    TextArea: styled.textarea`
      width: 100%;
      min-height: 20.62rem;
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
      height: 2.06rem;
    `,
    TextLength: styled.div`
      font-size: 0.87rem;
      color: ${(props) => props.theme.color.fontGray};
    `,
    SaveButton: styled.button`
      width: 5rem;
      height: 2.25rem;
      background-color: ${(props) => props.theme.color.fontPink};
      color: ${(props) => props.theme.color.mainColor};
      font-size: 0.87rem;
      border: none;
      cursor: pointer;
      border-radius: 0.25rem;
    `,
  };

export default MovieDetailModal;
