import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { comments } from "../../../data/comments";

const Comment = () => {
  return (
    <>
      {comments.map((item) => (
        <S.Card key={item.id}>
          <S.ProfileSection>
            <S.ProfileImage src={item.userImage} alt={`${item.userName}`} />
            <S.Nickname>{item.userName}</S.Nickname>
          </S.ProfileSection>
          <S.MainContent>
            <S.ImageWrapper>
              <S.Image src={item.image} alt={item.title} />
            </S.ImageWrapper>
            <S.Content>
              <S.Title>{item.title}</S.Title>
              <S.GenreYear>
                {item.genre} • {item.year}
              </S.GenreYear>
              <S.Comment>{item.comment}</S.Comment>
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

const S = {
  Card: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 16rem;
    margin: 0rem 0 1rem 0;
    padding: 1rem;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    background-color: ${(props) => props.theme.color.mainColor};
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
  `,

  Nickname: styled.div`
    font: ${(props) => props.theme.font.fontSuitBold};
    font-size: 0.9rem;
    font-weight: ${(props) => props.theme.font.weightMedium};
  `,

  MainContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,

  ImageWrapper: styled.div`
    margin-right: 0.7rem;
  `,

  Image: styled.img`
    width: 5.6rem;
    height: 7.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
    margin: 0.5rem 0 0.7rem 0;
  `,

  Content: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,

  Title: styled.h3`
    margin: 0.5rem 0 0.3rem 0;
    font: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightMedium};
  `,

  GenreYear: styled.p`
    margin: 0 0 0.5rem 0;
    font: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Comment: styled.p`
    margin-top: 0.5rem;
    font: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Rating: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font: ${(props) => props.theme.font.fontSuitRegular};
    font-weight: ${(props) => props.theme.font.fontWeightMedium};
    color: ${(props) => props.theme.color.fontPink};
    background: ${(props) => props.theme.color.gray};
    border-radius: 50%;
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    margin: 1rem 0 0 0;
  `,

  Stat: styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};

export default Comment;
