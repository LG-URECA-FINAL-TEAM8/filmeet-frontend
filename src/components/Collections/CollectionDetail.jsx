import styled from "styled-components";
import { lightTheme } from "../../styles/themes";
import useCollectionsStore from "../../store/collections/useCollectionsStore";
import Poster from "../Common/poster/Poster";

const CollectionsLabel = {
  Like: "좋아요",
  Comment: "댓글",
  NoData: "데이터를 불러올 수 없습니다.",
  Movies: "작품들",
  count: "개",
};

const CollectionDetail = ({ collectionData }) => {
  const { isDropdownOpen, openDropdownMenu, closeDropdownMenu } =
    useCollectionsStore();

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
    likes = 0,
  } = collectionData;

  return (
      <S.Container>
        <S.Header backgroundImage={bannerImage}>
          <S.Overlay />
          <S.Profile>
            <S.ProfileImage src={profileImage} alt={`${name} 프로필`} />
            <S.UserName>{name}</S.UserName>
          </S.Profile>
          <S.MoreOptions>
            ⋮
          </S.MoreOptions>
        </S.Header>

        <S.Content>
          <S.CollectionTitle>{collectionName}</S.CollectionTitle>
          <S.Description>
            {description}
            <S.Stats>
              {CollectionsLabel.Like} {likes} {CollectionsLabel.count}{" "}
              {CollectionsLabel.Comment} 0개
            </S.Stats>
          </S.Description>

          <S.Divider />

          <S.MoviesSection>
            <S.SectionHeader>
              <S.SectionTitle>{CollectionsLabel.Movies}</S.SectionTitle>
            </S.SectionHeader>
            <Poster caseType={4} movies={movies} /> 
          </S.MoviesSection>
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
    color: ${lightTheme.fontWhite};
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
    font-family: ${lightTheme.fontSuitRegular};
  `,

  Stats: styled.span`
    display: block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: ${lightTheme.fontGray};
    font-family: ${lightTheme.fontSuitRegular};
  `,

  ActionSection: styled.div`
    margin: 1rem 0;
    padding: 0.1rem 0;
  `,

  Divider: styled.div`
    height: 0.1rem; 
    background: ${lightTheme.fontGray}; 
    margin: 1rem 0;
    width: 100%; 
  `,

  MoviesSection: styled.section`
    margin-top: 2rem;
  `,

  SectionHeader: styled.section`
    margin-bottom: 1rem;
  `,

  SectionTitle: styled.h2`
    font-size: 1.2rem;
    font-family: ${lightTheme.fontSuitBold};
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

  DropdownMenu: styled.div`
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    background: ${lightTheme.fontWhite};
    box-shadow: ${lightTheme.defaultBoxShadow};
    border-radius: 0.3rem;
    z-index: 10;
  `,

  DropdownItem: styled.div`
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background: ${lightTheme.lightGray};
    }
  `,
};
