import React, { useState } from "react";
import styled from "styled-components";
import MiniComment from "./MiniComment";


function MovieComment() {
  const allComments = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    userImage: "https://via.placeholder.com/40",
    userName: `User ${index + 1}`,
    title: `Movie Title ${index + 1}`,
    comment: `This is a comment for Movie Title ${index + 1}`,
    rating: Math.random() * 5,
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 50),
  }));


  return (
    <S.MovieCommentContainer>
      <S.CommentHeader>
        <S.SectionTitle>코멘트 
            <S.CommentCount>486+</S.CommentCount>
        </S.SectionTitle>
        <S.ShowMoreButton>더보기</S.ShowMoreButton>
      </S.CommentHeader>
      <S.CommentGrid>
        {allComments.map((item) => (
          <MiniComment key={item.id} {...item} />
        ))}
      </S.CommentGrid>
    </S.MovieCommentContainer>
  );
}

export default MovieComment;

const S = {
    MovieCommentContainer: styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 1320px;
      height: 632px;
      margin: 0 300px;
      padding: 0 0 40px;
    `,
  
    CommentHeader: styled.div`
      display: flex;
      justify-content: space-between; /* 좌우 끝에 배치 */
      align-items: center; /* 세로 정렬 */
      width: 100%; /* 부모 컨테이너에 맞춤 */
      height: 44px;
      margin-bottom: 20px; /* 하단 여백 */
    `,
  
    SectionTitle: styled.header`
      font-size: 1.5rem;
      font-family: ${(props) => props.theme.font.fontSuitBold};
      color: ${(props) => props.theme.color.fontBlack};
      display: flex;
      align-items: center;
    `,
  
    CommentCount: styled.div`
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      color: ${(props) => props.theme.color.fontPink};
      margin-left: 0.5rem; /* 제목과 간격 */
    `,
  
    CommentGrid: styled.div`
      width: 100%;
      height: 100%; /* 부모 컨테이너 높이에 맞춤 */
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 한 행에 4개 */
      gap: 1rem; /* 카드 간격 */
      overflow: hidden; /* 넘치는 콘텐츠 숨김 */
    `,
  
    ShowMoreButton: styled.div`
      padding: 0.5rem 1rem;
      border: none;
      color: ${(props) => props.theme.color.fontPink};
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 1rem;
      cursor: pointer;
    `,
  };
  
  
