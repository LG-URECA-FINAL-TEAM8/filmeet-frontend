import styled from "styled-components";
import { lightTheme } from "../../styles/themes";
import { useNavigate } from "react-router-dom";

const CollectionList = ({ collections  }) => {
  const navigate = useNavigate();

  const CollectionsLabel = {
    Like: "좋아요",
    Comment: "댓글",
  };
  
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
              <S.CollectionName>{collection.CollectionsName}</S.CollectionName>
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
    padding: 2rem;
  `,

  ListContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  CollectionCard: styled.div`
    width: 100%;
    border: ${lightTheme.borderDefault};
    border-radius: 0.5rem;
    overflow: hidden;
    background: ${lightTheme.mainColor};
    box-shadow: ${lightTheme.defaulBoxShadow};
  `,

  ImageSection: styled.div`
    position: relative;
    width: 100%;
    height: 18rem;
    background: ${lightTheme.fontGray};
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
    color: ${lightTheme.fontWhite};
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
    border: ${lightTheme.borderDefault};
  `,

  ProfileName: styled.span`
    font-size: 1rem;
    font-weight: ${lightTheme.fontWeightBold};
    color: ${lightTheme.fontWhite};
    font-family: ${lightTheme.fontSuitBold};
  `,

  Badge: styled.div`
    background: ${lightTheme.fontBlack};
    color: ${lightTheme.fontWhite};
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${lightTheme.fontSuitRegular};
  `,

  CardContent: styled.div`
    padding: 1rem;
  `,

  CollectionName: styled.h2`
    font-size: 1.2rem;
    margin: 0;
    color: ${lightTheme.fontBlack};
    font-family: ${lightTheme.fontSuitBold};
  `,

  Description: styled.p`
    font-size: 1rem;
    color: ${lightTheme.fontGray};
    font-family: ${lightTheme.fontSuitRegular};
  `,

  CardActions: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: ${lightTheme.fontGray};
    border-top: ${lightTheme.borderDefault};
  `,

  Action: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: ${lightTheme.fontWeightMedium};
    }
  `,
};