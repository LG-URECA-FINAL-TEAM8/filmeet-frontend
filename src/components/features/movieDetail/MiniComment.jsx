import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { comments } from "../../../data/comments";
import { useNavigate } from "react-router-dom";
import { createProfileClickHandler } from "../../../utils/ratings/navigationHandlers";

const MiniComment = () => {
  const navigate = useNavigate();

  const handleProfileClick = createProfileClickHandler(navigate, "/mypage");

  const handleCommentClick = (commentId) => {
    navigate(`/mypage/comments/${commentId}`);
  };

  return (
    <>
      {comments.map((item) => (
        <S.Card key={item.id}>
          <S.ProfileSection onClick={handleProfileClick}>
            <S.ProfileImage src={item.userImage} alt={`${item.userName}`} />
            <S.Nickname>{item.userName}</S.Nickname>
          </S.ProfileSection>
          <S.MainContent>
            <S.Content>
              <S.Comments onClick={() => handleCommentClick(item.id)}>{item.comment}</S.Comments>
            </S.Content>
            <S.Rating>★ {item.rating.toFixed(1)}</S.Rating>
          </S.MainContent>
          <S.FeedStats>
            <S.Stat>
              <SvgIcLikeFilled24 width={"1rem"} height={"1rem"} /> {item.likes}
            </S.Stat>
            <S.Stat>
              <SvgIcReplyFilled24 width={"1rem"} height={"1rem"} /> {item.comments}
            </S.Stat>
          </S.FeedStats>
        </S.Card>
      ))}
    </>
  );
};

export default MiniComment;

const S = {
  Card: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 19.8rem;
    height: 16rem;
    margin: 0 0 1rem;
    padding: 1rem;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
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
    object-fit: cover;
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

  ImageWrapper: styled.div`
    margin-right: 0.4rem;
  `,

  Image: styled.img`
    width: 5.6rem;
    height: 7.5rem;
    margin: 0.5rem 0 0.7rem;
    border-radius: 0.5rem;
    object-fit: cover;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    width: 19rem;
    height: 7.5rem;
    margin: 0.7rem 0 0.9rem;
    flex: 1;
  `,

  Title: styled.h3`
    margin: 0.5rem 0 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1rem;
  `,

  GenreYear: styled.p`
    margin: 0 0 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Comments: styled.p`
    margin-top: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
  `,

  Rating: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontPink};
    border-radius: 50%;
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 19rem;
    margin: 1rem 0 0;
  `,

  Stat: styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};


