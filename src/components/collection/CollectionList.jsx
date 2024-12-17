import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NoResult from './NoResult';

const CollectionList = ({ collections }) => {
  const navigate = useNavigate();

  const CollectionsLabel = {
    Like: '좋아요',
    Comment: '댓글',
  };

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
        {collections.map((collection) => {
          const movies = collection.movies || []; // movies가 없을 경우 빈 배열로 처리
          const firstMovie = movies[0] || {}; // 첫 번째 영화 정보
          return (
            <S.CollectionCard
              key={collection.collectionId}
              onClick={() => navigate(`/mypage/collections/detail/${collection.collectionId}`)}>
              <S.ImageSection>
                <S.Image
                  src={firstMovie.posterImage || 'https://via.placeholder.com/640x260'}
                  alt={firstMovie.title || ''}
                />
                <S.Overlay>
                  <S.Profile>
                    <S.ProfileImage src={collection.userProfileImage || ''} alt="Profile" />
                    <S.ProfileName>{collection.nickname || ''}</S.ProfileName>
                  </S.Profile>
                  <S.Badge>{movies.length}</S.Badge> {/* movies가 빈 배열일 경우 0 */}
                </S.Overlay>
              </S.ImageSection>
              <S.CardContent>
                <S.CollectionName>{collection.collectionTitle || ''}</S.CollectionName>
                <S.Description>{collection.collectionContent || ''}</S.Description>
              </S.CardContent>
              <S.CardActions>
                <S.Action>
                  {CollectionsLabel.Like} {collection.likeCounts || 0}
                </S.Action>
                <S.Action>
                  {CollectionsLabel.Comment} {collection.commentCounts || 0}
                </S.Action>
              </S.CardActions>
            </S.CollectionCard>
          );
        })}
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
    width: 40rem;
    overflow: hidden;
    background: ${(props) => props.theme.color.mainColor};
    border: ${(props) => props.theme.color.lineColor};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,

  ImageSection: styled.div`
    position: relative;
    width: 100%;
    height: 18rem;
    background: ${(props) => props.theme.color.fontGray};
  `,

  Image: styled.img`
    width: 40rem;
    height: 18rem;
    object-fit: cover;
  `,

  Overlay: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.color.fontBlack};
    color: ${(props) => props.theme.color.fontWhite};
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 0.8rem;
  `,

  CardContent: styled.div`
    padding: 1rem;
  `,

  CollectionName: styled.h2`
    margin: 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.fontBlack};
  `,

  Description: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  CardActions: styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-top: ${(props) => props.theme.box.defaultBorder};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
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
