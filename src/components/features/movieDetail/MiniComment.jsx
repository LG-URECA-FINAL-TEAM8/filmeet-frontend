import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { useNavigate } from "react-router-dom";
import { createProfileClickHandler } from "../../../utils/ratings/navigationHandlers";
import useMovieCommentStore from "../../../store/moviedetail/useMovieCommentStore";


const MiniComment = ({ reviewId, nickName, profileImage, content, likeCounts, commentCounts }) => {
  const navigate = useNavigate();
  const { likedComments, toggleLike } = useMovieCommentStore();

  const handleProfileClick = createProfileClickHandler(navigate, "/mypage");

  const handleCommentClick = (reviewId) => {
    navigate(`/moviedetail/comments/${reviewId}`);
  };

  //코멘트 목록에 좋아요 상태변경
  const isLiked = likedComments[reviewId] || false;

  return (
    <S.Card key={reviewId}>
      <S.ProfileSection onClick={handleProfileClick}>
        <S.ProfileImage bgImage={profileImage} />
        <S.Nickname>{nickName}</S.Nickname>
      </S.ProfileSection>
      <S.MainContent onClick={() => handleCommentClick(reviewId)}>
        <S.Comments>{content}</S.Comments>
      </S.MainContent>
      <S.FeedStats>
        <S.Stat>
          <SvgIcLikeFilled24 width={"1rem"} height={"1rem"} />
          {likeCounts}
        </S.Stat>
        <S.Stat>
          <SvgIcReplyFilled24 width={"1rem"} height={"1rem"} />
          {commentCounts}
        </S.Stat>
      </S.FeedStats>
      <S.Like>
        <S.LikeButton liked={isLiked} onClick={() => toggleLike(reviewId)}>
          좋아요
        </S.LikeButton>
      </S.Like>
    </S.Card>
  );
};

export default MiniComment;

const S = {
  Card: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 17.5rem;
    margin: 0 0 1rem;
    padding: 1rem;
    border-radius: 0.3rem;
    background-color: ${(props) => props.theme.color.commentColor};
    box-sizing: border-box;
  `,

  ProfileSection: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,

  ProfileImage: styled.img`
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 0.5rem 0 0;
    border-radius: 50%;
    background-image: ${(props) => `url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
    cursor: pointer;
  `,

  Nickname: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    cursor: pointer;
  `,

  MainContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-top: ${(props) => props.theme.font.borderDefault};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  Comments: styled.p`
    margin-top: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
    min-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 18rem;
    padding: 0.6rem 0;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,

  Stat: styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Like: styled.div`
    border: none;
    margin: 0 -0.2rem;
    padding: 0.6rem 0;
  `,

  LikeButton: styled.button`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    background-color: ${(props) => (props.liked ? props.theme.color.fontPink : "transparent")};
    color: ${(props) => (props.liked ? props.theme.color.fontWhite : props.theme.color.fontPink)};
    border: none;
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;   
  `,
};
