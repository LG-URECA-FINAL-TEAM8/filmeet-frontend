import React, { useState, useRef } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/themes";
import { light } from "@mui/material/styles/createPalette";

const CollectionsLabel = {
    Like: "좋아요",
    Comment: "댓글",
    NoData: "데이터를 불러올 수 없습니다.",
    AddCommentPlaceholder: "컬렉션에 댓글을 남겨보세요.",
    Movies: "작품들",
    registration: "등록",
    count:"개",
    LikeIcon:"👍",
    CommentIcon:"💬"
  };
  
  const CollectionDetail = ({ collectionData }) => {
    const [likes, setLikes] = useState(collectionData?.likes || 0); 
    const [comment, setComment] = useState(""); 
    const [comments, setComments] = useState([]); 
    const commentSectionRef = useRef(null); 
  
    if (!collectionData) {
      return <div>{CollectionsLabel.NoData}</div>;
    }
  
    const {
      profileImage = "https://via.placeholder.com/48", 
      name = "알 수 없음",
      collectionName = "제목 없음",
      description = "설명 없음",
      bannerImage = "https://via.placeholder.com/800x200", 
      movies = [],
    } = collectionData;
  
    
    const handleLike = () => {
      setLikes((prevLikes) => prevLikes + 1); 
    };
  
 
    const handleCommentButton = () => {
      if (commentSectionRef.current) {
        commentSectionRef.current.scrollIntoView({ behavior: "smooth" }); 
      }
    };
  
    const handleAddComment = () => {
      if (comment.trim()) {
        setComments([...comments, comment]); 
        setComment(""); 
      }
    };
  
    return (
      <S.Container>
        <S.Header backgroundImage={bannerImage}>
          <S.Overlay />
          <S.Profile>
            <S.ProfileImage src={profileImage} alt={`${name} 프로필`} />
            <S.UserName>{name}</S.UserName>
          </S.Profile>
          <S.MoreOptions>⋮</S.MoreOptions>
        </S.Header>
    
        <S.Content>
          <S.CollectionTitle>{collectionName}</S.CollectionTitle>
          <S.Description>
            {description}
            <S.Stats>
              {CollectionsLabel.Like} {likes}
              {CollectionsLabel.count} {CollectionsLabel.Comment} {comments.length}개
            </S.Stats>
          </S.Description>
          <S.ActionSection>
            <S.ActionButton onClick={handleLike}>
              <S.Icon>{CollectionsLabel.LikeIcon}</S.Icon> {CollectionsLabel.Like}
            </S.ActionButton>
            <S.Divider />
            <S.ActionButton onClick={handleCommentButton}>
              <S.Icon>{CollectionsLabel.CommentIcon}</S.Icon> {CollectionsLabel.Comment}
            </S.ActionButton>
          </S.ActionSection>
    
          {/* 작품들 섹션 */}
          <S.MoviesSection>
            <S.SectionHeader>
              <S.SectionTitle>{CollectionsLabel.Movies}</S.SectionTitle>
            </S.SectionHeader>
            <S.MovieGrid>
              {movies.map((movie, index) => (
                <S.MovieCard key={index}>
                  <S.MoviePoster
                    src={movie.image || "https://via.placeholder.com/150x225"}
                    alt={movie.title || "제목 없음"}
                  />
                  <S.MovieInfo>
                    <S.MovieTitle>{movie.title || "제목 없음"}</S.MovieTitle>
                  </S.MovieInfo>
                </S.MovieCard>
              ))}
            </S.MovieGrid>
          </S.MoviesSection>
    
          {/* 댓글 섹션 */}
          <S.CommentSection ref={commentSectionRef}>
            <S.CommentTitle>
              {CollectionsLabel.Comment} {comments.length}
            </S.CommentTitle>
            {comments.map((cmt, index) => (
              <S.Comment key={index}>{cmt}</S.Comment>
            ))}
            <S.CommentInputContainer>
              <S.CommentInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={CollectionsLabel.AddCommentPlaceholder}
              />
              <S.SubmitButton onClick={handleAddComment}>
                {CollectionsLabel.registration}
              </S.SubmitButton>
            </S.CommentInputContainer>
          </S.CommentSection>
        </S.Content>
      </S.Container>
    );
  };
  
  export default CollectionDetail;
  


  const S = {
    Container: styled.div`
      width: 100%;
      max-width: 50rem; 
      margin: 2rem auto 0; 
      background: ${lightTheme.fontWhite}; 
      border: 1px solid ${lightTheme.fontWhite}; 
      border-radius: 0.5rem; 
      padding: 2rem 1rem 1rem; 
      overflow: hidden;
      box-shadow: ${lightTheme.defaulBoxShadow};
    `,
  
    Header: styled.div`
      position: relative;
      height: 12.5rem; 
      background-image: url(${(props) => props.backgroundImage});
      background-size: cover;
      background-position: center;
    `,
  
    Overlay: styled.div`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
    `,
  
    Profile: styled.div`
      position: absolute;
      bottom: 1rem; 
      left: 1rem; 
      display: flex;
      align-items: center;
      z-index: 2;
    `,
  
    ProfileImage: styled.img`
      width: 3rem; 
      height: 3rem; 
      border-radius: 50%;
      border: 0.1rem solid ${lightTheme.fontWhite}; 
      margin-right: 0.5rem; 
    `,
  
    UserName: styled.span`
      font-size: 1.2rem;
      color: white;
      font-weight: bold;
    `,
  
    MoreOptions: styled.div`
      position: absolute;
      top: 1rem; 
      right: 1rem; 
      color: ${lightTheme.fontWhite};
      font-size: 1.5rem;
      cursor: pointer;
      z-index: 2;
    `,
  
    Content: styled.div`
      padding: 1rem; 
    `,
  
    CollectionTitle: styled.h1`
      font-size: 1.5rem;
      margin: 0 0 0.5rem; 
      color: ${lightTheme.fontBlack};
      font-family: ${lightTheme.fontSuitBold};
    `,
  
    Description: styled.p`
      font-size: 1rem;
      color: ${lightTheme.fontGray}; 
      margin: 0.5rem 0 1rem; 
      font-family:${lightTheme.fontSuitRegular};
    `,
  
    Stats: styled.span`
      display: block;
      margin-top: 0.5rem; 
      font-size: 0.9rem;
      color: ${lightTheme.fontGray};
      font-family: ${lightTheme.fontSuitRegular};
    `,
  
    ActionSection: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0; 
      padding: 0.1rem 0;
      border-top: 1px solid ${lightTheme.fontGray};
      border-bottom: 1px solid ${lightTheme.fontGray};
    `,
  
    ActionButton: styled.button`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      color: ${lightTheme.fontGray};
      font-family:${lightTheme.fontSuitRegular};
  
      &:hover {
        color: ${lightTheme.fontPink}; 
      }
    `,
  
    Icon: styled.span`
      font-size: 1.2rem;
      margin-right: 0.3rem; 
    `,
  
    Divider: styled.div`
      width: 1px;
      height: 1.5rem; 
      background: ${lightTheme.fontGray};
    `,
  
    MoviesSection: styled.section`
      margin-top: 2rem; 
    `,
  
    SectionHeader: styled.section`
      margin-bottom: 1rem; 
    `,
  
    SectionTitle: styled.h2`
      font-size: 1.2rem;
      font-family:${lightTheme.fontSuitBold};
    `,
  
    MovieGrid: styled.section`
      display: flex;
      gap: 1rem; 
      flex-wrap: wrap;
    `,
  
    MovieCard: styled.div`
      width: 9.3rem;
      text-align: center;
    `,
  
    MoviePoster: styled.img`
      width: 9.4rem; 
      height: 14rem; 
      object-fit: cover;
      border-radius: 0.5rem; 
    `,
  
    MovieInfo: styled.div`
      margin-top: 0.5rem; 
    `,
  
    MovieTitle: styled.h4`
      font-size: 1rem;
    `,
  
    CommentSection: styled.div`
      margin-top: 2rem; 
    `,
  
    CommentTitle: styled.h3`
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-family:${lightTheme.fontSuitBold};
    `,
  
    Comment: styled.div`
      padding: 0.5rem 0; 
      border-bottom: 1px solid ${lightTheme.fontGray};
      font-size: 1rem;
    `,
  
    CommentInputContainer: styled.div`
      display: flex;
      align-items: center;
    `,
  
    CommentInput: styled.input`
      flex: 1;
      padding: 0.5rem; 
      border: 1px solid ${lightTheme.fontGray}; 
      font-size: 1rem;
      font-family:${lightTheme.fontSuitRegular};
      border-radius: 0.5rem;
    `,
  
    SubmitButton: styled.button`
      margin-left: 0.5rem; 
      padding: 0.5rem 1rem; 
      border: none;
      border-radius: 0.3rem; 
      background: ${lightTheme.font}; 
      color: ${lightTheme.fontGray};
      font-family:${lightTheme.fontSuitRegular};
  
      &:hover {
        background: ${lightTheme.fontPink}; 
      }
    `,
  };