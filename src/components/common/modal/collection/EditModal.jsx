import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import useCommentsStore from "../../../../store/collections/useCommentsStore";

const EditModal = () => {
  const {
    isModalOpen,
    closeModal,
    commentContent,
    setCommentContent,
    collectionId,
    collectionCommentId,
  } = useCommentsStore();

  useEffect(() => {
    console.log("현재 commentContent 값:", commentContent?.comment);
    console.log("현재 commentContent 값:", commentContent?.collectionId);
    console.log("현재 commentContent 값:", commentContent?.collectionCommentId);
  }, [commentContent]);
  const handleSave = () => {
    // 여기에 댓글 수정 저장 로직을 추가하세요
    console.log("댓글 수정 완료:", { collectionId, collectionCommentId, commentContent });
    closeModal();  // 저장 후 모달 닫기
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
            value={commentContent?.comment}  // commentContent 상태 사용
            onChange={(e) => setCommentContent(e.target.value)}  // 수정 시 상태 업데이트
            placeholder="내용을 수정해주세요."
          />
        </S.CommentContent>
        <S.Footer>
          <S.SaveButton onClick={handleSave}>수정</S.SaveButton>
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
    height: 2.06rem;
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