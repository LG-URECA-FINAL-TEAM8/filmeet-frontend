import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NoResult from "./NoResult"; // NoResult 컴포넌트 임포트

const CollectionList = ({ collections }) => {
  const navigate = useNavigate();

  const CollectionsLabel = {
    Like: "좋아요",
    Comment: "댓글",
  };

  // 데이터가 없는 경우 NoResult를 반환
  if (!collections || collections.length === 0) {
    return (
      <S.Wrapper>
        <NoResult />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.ListContainer>
        {collections.map((collection) => (
          <S.CollectionCard
            key={collection.id}
            onClick={() => navigate(`/mypage/collections/${collection.id}`)}
          >
            <S.ImageSection>
              <S.Image src={collection.image} />
              <S.Overlay>
                <S.Profile>
                  <S.ProfileImage src={collection.profileImage} alt="Profile" />
                  <S.ProfileName>{collection.name}</S.ProfileName>
                </S.Profile>
                <S.Badge>{collection.movies.length}</S.Badge>
              </S.Overlay>
            </S.ImageSection>
            <S.CardContent>
              <S.CollectionName>{collection.collectionsName}</S.CollectionName>
              <S.Description>
                {collection.description || "컬렉션 설명 없음"}
              </S.Description>
            </S.CardContent>
            <S.CardActions>
              <S.Action>
                {CollectionsLabel.Like} {collection.likes}
              </S.Action>
              <S.Action>
                {CollectionsLabel.Comment} {collection.commentsCount}
              </S.Action>
            </S.CardActions>
          </S.CollectionCard>
        ))}
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default CollectionList;

const S = {
  Wrapper: styled.div`
    max-width: 40rem;
    margin: 0 auto;
  `,

  ListContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `,

  CollectionCard: styled.div`
    width: 100%;
    border: ${(props) => props.theme.box.defaultBorder};
    border-radius: 0.5rem;
    overflow: hidden;
    background: ${(props) => props.theme.color.mainColor};
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,

  ImageSection: styled.div`
    position: relative;
    width: 100%;
    height: 18rem;
    background: ${(props) => props.theme.color.fontGray};
  `,

  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  Overlay: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    color: ${(props) => props.theme.color.mainColor};
  `,

  Profile: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,

  ProfileImage: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: ${(props) => props.theme.box.defaultBorder};
  `,

  ProfileName: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightBold};
    color: ${(props) => props.theme.color.mainColor};
  `,

  Badge: styled.div`
    background: ${(props) => props.theme.color.fontBlack};
    color: ${(props) => props.theme.color.fontWhite};
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  CardContent: styled.div`
    padding: 1rem;
  `,

  CollectionName: styled.h2`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1.2rem;
    margin: 0;
    color: ${(props) => props.theme.color.fontBlack};
  `,

  Description: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  CardActions: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
    border-top: ${(props) => props.theme.box.defaultBorder};
  `,

  Action: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: ${(props) => props.theme.font.fontWeightBold};
    }
  `,
};
