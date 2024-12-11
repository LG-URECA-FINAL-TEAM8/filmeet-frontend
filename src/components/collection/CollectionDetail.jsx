import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Poster from '../common/poster/Poster';
import SvgOption from '../../assets/svg/Option';
import useCollectionsMenuStore from '../../store/collections/useCollectionsMenuStore';
import useCollectionsDeleteStore from '../../store/collections/useCollectionsDeleteStore';
import CollectionsDeleteModal from '../common/modal/CollectionsDeleteModal';
import useCollectionsStore from '../../store/collections/useCollectionsStore';
import { useEffect } from 'react';

const CollectionsLabel = {
  Like: '좋아요',
  Comment: '댓글',
  NoData: '데이터를 불러올 수 없습니다.',
  Movies: '작품들',
  count: '0',
  Delete: '삭제',
  Edit: '수정하기',
};

const CollectionDetail = ({ collectionData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setSelectedCollection } = useCollectionsStore();
  const { openMenuId, isOpen, openMenu, closeMenu } = useCollectionsMenuStore();
  const { openModal } = useCollectionsDeleteStore();

  useEffect(() => {
    closeMenu();
  }, [location, closeMenu]);

  const handleEditClick = () => {
    setSelectedCollection(collectionData);
    closeMenu();
    navigate(`/mypage/collections/${collectionData.id}/edit`);
  };

  const handleDeleteClick = () => {
    setSelectedCollection(collectionData);
    openModal();
    closeMenu();
  };

  const handleMenuToggle = () => {
    if (isOpen && openMenuId === collectionData.id) {
      closeMenu();
    } else {
      openMenu(collectionData.id);
    }
  };

  const handlePageClick = (e) => {
    if (isOpen && !e.target.closest('[data-menu-toggle]')) {
      closeMenu();
    }
  };

  if (!collectionData) {
    return <div>{CollectionsLabel.NoData}</div>;
  }

  const {
    profileImage = 'https://via.placeholder.com/38x38',
    name = '알 수 없음',
    collectionName = '제목 없음',
    description = '설명 없음',
    bannerImage = 'https://via.placeholder.com/640x260',
    movies = [],
    likes = 0,
  } = collectionData;

  return (
    <S.Container onClick={handlePageClick}>
      <S.Header backgroundImage={bannerImage}>
        <S.Overlay />
        <S.Profile>
          <S.ProfileImage src={profileImage} alt={`${name} 프로필`} />
          <S.UserName>{name}</S.UserName>
        </S.Profile>
        <S.MoreOptions onClick={handleMenuToggle} data-menu-toggle>
          <S.StyledSvgOption />
        </S.MoreOptions>
        {isOpen && openMenuId === collectionData.id && (
          <S.DropdownMenu>
            <S.DropdownItem onClick={handleDeleteClick}>{CollectionsLabel.Delete}</S.DropdownItem>
            <S.DropdownItem onClick={handleEditClick}>{CollectionsLabel.Edit}</S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.Header>

      <S.Content>
        <S.CollectionTitle>{collectionName}</S.CollectionTitle>
        <S.Description>{description}</S.Description>
        <S.Stats>
          {CollectionsLabel.Like} {likes} {CollectionsLabel.Comment} {CollectionsLabel.count}
        </S.Stats>
      </S.Content>
      <S.Divider />
      <S.MoviesSection>
        <S.SectionHeader>
          <S.SectionTitle>{CollectionsLabel.Movies}</S.SectionTitle>
          <S.TitleCount>{movies.length}</S.TitleCount>
        </S.SectionHeader>
        <Poster caseType={4} movies={movies} />
      </S.MoviesSection>
      <CollectionsDeleteModal />
    </S.Container>
  );
};

export default CollectionDetail;

const S = {
  Container: styled.div`
    width: 40rem;
    height: auto;
    overflow: hidden;
    background: ${(props) => props.theme.color.mainColor};
    border: 1px solid ${(props) => props.theme.color.mainColor};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,

  Header: styled.div`
    position: relative;
    height: 16rem;
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
    z-index: 2;
    display: flex;
    align-items: center;
  `,

  ProfileImage: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.1rem solid ${(props) => props.theme.color.mainColor};
    margin-right: 0.5rem;
  `,

  UserName: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.mainColor};
  `,

  MoreOptions: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 1rem;
      height: 1rem;
    }
  `,

  StyledSvgOption: styled(SvgOption)`
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.mainColor};
    cursor: pointer;
  `,

  Content: styled.div`
    width: 37.5rem;
    height: 7rem;
    margin: 0 1.25rem 0 1.25rem;
  `,

  CollectionTitle: styled.h1`
    height: 1.5rem;
    margin: 1rem 0 0.4rem 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    font-size: 1.1rem;
  `,

  Description: styled.article`
    margin: 0.7rem 0 0 0;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Stats: styled.ul`
    margin: 2rem 0 0 0;
    padding: 0 0 0 0;
    display: block;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  ActionSection: styled.div`
    margin: 1rem 0;
    padding: 0.1rem 0;
  `,

  Divider: styled.hr`
    width: 37.5rem;
    margin: 0 1.25rem 0 1.25rem;
    color: ${(props) => props.theme.font.borderDefault};
  `,

  MoviesSection: styled.section`
    margin: 0 1.25rem;
  `,

  SectionHeader: styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  `,

  SectionTitle: styled.h2`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,

  TitleCount: styled.span`
    color: ${(props) => props.theme.color.fontGray};
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

  MovieTitle: styled.h4`
    font-size: 1rem;
  `,

  DropdownMenu: styled.div`
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    z-index: 10;
    background: ${(props) => props.theme.color.mainColor};
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    border-radius: 0.3rem;
  `,

  DropdownItem: styled.div`
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.color.collectionColor};
    }
  `,
};
