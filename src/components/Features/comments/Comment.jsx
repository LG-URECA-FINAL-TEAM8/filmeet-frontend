import styled from "styled-components";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import SvgIcReplyFilled24 from "../../../assets/svg/IcReplyFilled24";
import { lightTheme } from "../../../styles/themes";
import { comments } from "../../../data/comments"; // 데이터를 임포트합니다.

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
    height: 15rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.3rem;
    background-color: ${lightTheme.fontWhite};
    box-sizing: border-box;
  `,

  ProfileSection: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,

  ProfileImage: styled.img`
    width: 1.8rem;
    height: 1.875rem;
    margin-right: 1rem;
    border-radius: 50%;
    object-fit: cover;
  `,

  Nickname: styled.div`
    font-size: 1rem;
    font-weight: ${lightTheme.fontWeightMedium};
    color: ${lightTheme.fontPrimary};
  `,

  MainContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,

  ImageWrapper: styled.div`
    margin-right: 1rem;
  `,

  Image: styled.img`
    width: 5.6rem;
    height: 7.5rem;
    border-radius: 0.5rem;
    object-fit: cover;
  `,

  Content: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,

  Title: styled.h3`
    margin: 0;
    font-size: 1.2rem;
    font-weight: ${lightTheme.fontWeightBold};
    color: ${lightTheme.fontPrimary};
  `,

  GenreYear: styled.p`
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: ${lightTheme.fontGray};
  `,

  Comment: styled.p`
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${lightTheme.fontSecondary};
  `,

  Rating: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: ${lightTheme.fontWeightBold};
    color: ${lightTheme.fontPink};
    background: ${lightTheme.ratingBg};
    border-radius: 50%;
  `,

  FeedStats: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
  `,

  Stat: styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: ${lightTheme.fontGray};
  `,
};

export default Comment;
