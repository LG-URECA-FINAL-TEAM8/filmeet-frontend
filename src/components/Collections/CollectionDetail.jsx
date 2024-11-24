import React, { useState, useRef } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/themes";

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
    const [likes, setLikes] = useState(collectionData?.likes || 0); // 좋아요 상태 관리
    const [comment, setComment] = useState(""); // 댓글 입력 상태
    const [comments, setComments] = useState([]); // 댓글 목록 상태
    const commentSectionRef = useRef(null); // 댓글 섹션 참조
  
    if (!collectionData) {
      return <div>{CollectionsLabel.NoData}</div>;
    }
  
    const {
      profileImage = "https://via.placeholder.com/48", // 기본 이미지
      name = "알 수 없음",
      collectionName = "제목 없음",
      description = "설명 없음",
      bannerImage = "https://via.placeholder.com/800x200", // 기본 배너 이미지
      movies = [],
    } = collectionData;
  
    // 좋아요 버튼 핸들러
    const handleLike = () => {
      setLikes((prevLikes) => prevLikes + 1); // 좋아요 수 증가
    };
  
    // 댓글 버튼 핸들러
    const handleCommentButton = () => {
      if (commentSectionRef.current) {
        commentSectionRef.current.scrollIntoView({ behavior: "smooth" }); // 스크롤 이동
      }
    };
  
    const handleAddComment = () => {
      if (comment.trim()) {
        setComments([...comments, comment]); // 댓글 추가
        setComment(""); // 입력 필드 초기화
      }
    };
  
    return (
      <Container>
        <Header backgroundImage={bannerImage}>
          <Overlay />
          <Profile>
            <ProfileImage src={profileImage} alt={`${name} 프로필`} />
            <UserName>{name}</UserName>
          </Profile>
          <MoreOptions>⋮</MoreOptions>
        </Header>
  
    
        <Content>
          <CollectionTitle>{collectionName}</CollectionTitle>
          <Description>
            {description}
            <Stats>
              {CollectionsLabel.Like} {likes}{CollectionsLabel.count} {CollectionsLabel.Comment} {comments.length}개
            </Stats>
          </Description>
          <ActionSection>
            <ActionButton onClick={handleLike}>
              <Icon> {CollectionsLabel.LikeIcon}</Icon> {CollectionsLabel.Like}
            </ActionButton>
            <Divider />
            <ActionButton onClick={handleCommentButton}>
              <Icon> {CollectionsLabel.CommentIcon}</Icon> {CollectionsLabel.Comment}
            </ActionButton>
          </ActionSection>
  
          {/* 작품들 섹션 */}
          <MoviesSection>
            <SectionHeader>
              <SectionTitle>{CollectionsLabel.Movies}</SectionTitle>
            </SectionHeader>
            <MovieGrid>
              {movies.map((movie, index) => (
                <MovieCard key={index}>
                  <MoviePoster src={movie.image || "https://via.placeholder.com/150x225"} alt={movie.title || "제목 없음"} />
                  <MovieInfo>
                    <MovieTitle>{movie.title || "제목 없음"}</MovieTitle>
                  </MovieInfo>
                </MovieCard>
              ))}
            </MovieGrid>
          </MoviesSection>
  
          {/* 댓글 섹션 */}
          <CommentSection ref={commentSectionRef}>
            <CommentTitle>
              {CollectionsLabel.Comment} {comments.length}
            </CommentTitle>
            {comments.map((cmt, index) => (
              <Comment key={index}>{cmt}</Comment>
            ))}
            <CommentInputContainer>
              <CommentInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={CollectionsLabel.AddCommentPlaceholder}
              />
              <SubmitButton onClick={handleAddComment}> {CollectionsLabel.registration}</SubmitButton>
            </CommentInputContainer>
          </CommentSection>
        </Content>
      </Container>
    );
  };
  
  export default CollectionDetail;
  


const Container = styled.div`
  width: 100%;
  max-width: 50rem; 
  margin: 2rem auto 0; 
  background: ${lightTheme.fontWhite}; 
  border: 1px solid ${lightTheme.fontWhite}; 
  border-radius: 0.5rem; 
  padding: 2rem 1rem 1rem; 
  overflow: hidden;
  box-shadow: ${lightTheme.defaulBoxShadow};
`;

const Header = styled.div`
  position: relative;
  height: 12.5rem; 
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
`;

const Profile = styled.div`
  position: absolute;
  bottom: 1rem; 
  left: 1rem; 
  display: flex;
  align-items: center;
  z-index: 2;
`;

const ProfileImage = styled.img`
  width: 3rem; 
  height: 3rem; 
  border-radius: 50%;
  border: 0.1rem solid ${lightTheme.fontWhite}; 
  margin-right: 0.5rem; 
`;

const UserName = styled.span`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
`;

const MoreOptions = styled.div`
  position: absolute;
  top: 1rem; 
  right: 1rem; 
  color: ${lightTheme.fontWhite};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 2;
`;

const Content = styled.div`
  padding: 1rem; 
`;

const CollectionTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 0.5rem; 
  color: ${lightTheme.fontBlack};
  font-family: ${lightTheme.fontSuitBold};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${lightTheme.fontGray}; 
  margin: 0.5rem 0 1rem; 
  font-family:${lightTheme.fontSuitRegular};
`;

const Stats = styled.span`
  display: block;
  margin-top: 0.5rem; 
  font-size: 0.9rem;
  color: ${lightTheme.fontBlack};
  font-family: ${lightTheme.fontSuitBold};
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0; 
  padding: 0.1rem 0;
  border-top: 1px solid ${lightTheme.fontGray};
  border-bottom: 1px solid ${lightTheme.fontGray};
`;

const ActionButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${lightTheme.fontGray};
  font-family:${lightTheme.fontSuitBold};

  &:hover {
    color: ${lightTheme.fontPink}; 
  }
`;

const Icon = styled.span`
  font-size: 1.2rem;
  margin-right: 0.3rem; 
`;

const Divider = styled.div`
  width: 1px;
  height: 1.5rem; 
  background: ${lightTheme.fontGray};
`;

const MoviesSection = styled.section`
  margin-top: 2rem; 
`;

const SectionHeader = styled.section`
  margin-bottom: 1rem; 
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  font-family:${lightTheme.fontSuitBold};
`;

const MovieGrid = styled.section`
  display: flex;
  gap: 1rem; 
  flex-wrap: wrap;
`;

const MovieCard = styled.div`
  width: 9.3rem;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 9.4rem; 
  height: 14rem; 
  object-fit: cover;
  border-radius: 0.5rem; 
`;

const MovieInfo = styled.div`
  margin-top: 0.5rem; 
`;

const MovieTitle = styled.h4`
  font-size: 1rem;
`;

const CommentSection = styled.div`
  margin-top: 2rem; 
`;

const CommentTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-family:${lightTheme.fontSuitBold};
`;

const Comment = styled.div`
  padding: 0.5rem 0; 
  border-bottom: 1px solid ${lightTheme.fontGray};
  font-size: 1rem;
`;

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  flex: 1;
  padding: 0.5rem; 
  border: 1px solid ${lightTheme.fontGray}; 
  font-size: 1rem;
  font-family:${lightTheme.fontSuitRegular};
`;

const SubmitButton = styled.button`
  margin-left: 0.5rem; 
  padding: 0.5rem 1rem; 
  border: none;
  border-radius: 0.3rem; 
  background: ${lightTheme.fontPink}; ; 
  color: ${lightTheme.fontWhite};
  font-family:${lightTheme.fontSuitRegular};

  &:hover {
    background: ${lightTheme.fontGray}; 
  }
`;