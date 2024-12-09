import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { useNavigate } from "react-router-dom";

const MovieMoreComment = ({ comments }) => {
  const navigate = useNavigate();

  const handleCommentClick = (reviewId) => {
    navigate(`/moviedetail/moviecomment/${reviewId}`);
  };  

  return (
    <>
      {comments.map((item) => (
        <S.Card key={item.reviewId}>
          <S.ProfileSection>
            <S.ProfileImage
              src={item.profileImage}
              alt={item.nickName}
            />
            <S.Nickname>{item.nickName}</S.Nickname>
          </S.ProfileSection>
          <S.MainContent onClick={() => handleCommentClick(item.reviewId)}>
            <S.Comments>{item.content}</S.Comments>
          </S.MainContent>
          <S.FeedStats>
            <S.Stat>
              <SvgIcLikeFilled24 width={"1rem"} height={"1rem"} />
              {item.likeCounts}
            </S.Stat>
            <S.Stat>
              <SvgIcReplyFilled24 width={"1rem"} height={"1rem"} />
              {item.commentCounts}
            </S.Stat>
          </S.FeedStats>
        </S.Card>
      ))}
    </>
  );
};

export default MovieMoreComment;

const S = {
    Card: styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 40rem;
      padding: 1.5rem;
      margin-bottom: 1rem;
      background-color: ${(props) => props.theme.color.commentColor};
      border-radius: 0.3rem;
    `,
    ProfileSection: styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    `,
    ProfileImage: styled.img`
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
      border-radius: 50%;
      object-fit: cover;
    `,
    Nickname: styled.div`
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 1rem;
    `,
    MainContent: styled.div`
      flex: 1;
      margin-bottom: 1rem;
      cursor: pointer;
    `,
    Comments: styled.p`
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 0.9rem;
      line-height: 1.5;
      color: ${(props) => props.theme.color.fontGray};
      padding: 1rem 0;
      border-top: ${(props) => props.theme.font.borderDefault};
      border-bottom: ${(props) => props.theme.font.borderDefault};
      white-space: pre-line;
    `,
    FeedStats: styled.div`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,
    Stat: styled.div`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: ${(props) => props.theme.font.fontSuitRegular};
      font-size: 0.9rem;
      color: ${(props) => props.theme.color.fontGray};
  
      svg {
        color: ${(props) => props.theme.color.fontGray};
      }
    `,
  };
  
  
