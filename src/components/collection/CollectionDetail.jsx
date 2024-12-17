import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAddComment, useFetchComments } from '../../apis/myPage/collection/queries';
import SvgComment from '../../assets/svg/comment';
import SvgIcLikeFilled24 from '../../assets/svg/IcLikeFilled24';
import SvgOption from '../../assets/svg/Option';
import useCollectionsDeleteStore from '../../store/collections/useCollectionsDeleteStore';
import CollectionsDeleteModal from '../common/modal/CollectionsDeleteModal';
import useCollectionsMenuStore from '../../store/collections/useCollectionsMenuStore';
import useCollectionsStore from '../../store/collections/useCollectionsStore';
import useCommentDeleteStore from '../../store/collections/useCommentDeleteStore';
import useCommentsStore from '../../store/collections/useCommentsStore';
import Poster from '../common/poster/Poster';
import CollectionCommentDelete from '../common/modal/CollectionCommentDelete';
import EditModal from '../common/modal/collection/EditModal';

const CollectionsLabel = {
  Like: '좋아요',
  Comment: '댓글',
  NoData: '데이터를 불러올 수 없습니다.',
  Movies: '작품들',
  Delete: '삭제',
  Edit: '수정하기',
  Submit: '등록',
  Placeholder: '컬렉션에 댓글을 남겨보세요.',
};

const CollectionDetail = ({ collectionData, movies, userInfo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setSelectedCollection,
    toggleLike,
    toggleCancelLike,
    initializeLikeStatus,
    collectionDetail,
    liking,
  } = useCollectionsStore();

  const isAuthor = collectionData.nickname === userInfo?.nickname;
  // 좋아요 상태 및 카운트는 store에서 직접 가져옴
  const isLiked = collectionDetail?.isLiked || false;
  const likeCounts = collectionDetail?.likeCounts || 0;

  const { openMenuId, isOpen, openMenu, closeMenu } = useCollectionsMenuStore();
  const { openModal } = useCollectionsDeleteStore();
  const { openModal: openCommentModal } = useCommentDeleteStore();
  const { openEditModal } = useCommentsStore();

  // React Query Hooks
  const { data: comments = [] } = useFetchComments(collectionData?.collectionId);
  const { mutate: addCommentMutation, isLoading: isSubmittingComment } = useAddComment();

  const [commentContent, setCommentContent] = useState('');
  const [openCommentMenu, setOpenCommentMenu] = useState(null);

  useEffect(() => {
    if (collectionData) {
      initializeLikeStatus(collectionData.isLiked || false, collectionData.likeCounts || 0);
    }
    closeMenu();
  }, [location, closeMenu, collectionData, initializeLikeStatus]);

  const handleEditClick = () => {
    setSelectedCollection(collectionData);
    closeMenu();
    navigate(`/mypage/collections/${collectionData.collectionId}/edit`);
  };

  const handleDeleteClick = () => {
    if (!collectionData) return;
    openModal(collectionData); // 삭제할 컬렉션 설정
  };

  const handleMenuToggle = () => {
    if (isOpen && openMenuId === collectionData.collectionId) {
      closeMenu();
    } else {
      openMenu(collectionData.collectionId);
    }
  };

  const handleLikeClick = async () => {
    if (liking) return;

    try {
      if (isLiked) {
        await toggleCancelLike(collectionData.collectionId);
      } else {
        await toggleLike(collectionData.collectionId);
      }
    } catch (error) {
      console.error('좋아요 상태 변경 중 오류 발생:', error);
    }
  };

  const handleCommentSubmit = () => {
    addCommentMutation(
      { collectionId: collectionData.collectionId, commentContent },
      {
        onSuccess: () => {
          setCommentContent(''); // 입력 필드 초기화
          setOpenCommentMenu(null); // 옵션 메뉴 닫기
        },
        onError: () => {},
      }
    );
  };

  const toggleCommentMenu = (index) => {
    setOpenCommentMenu((prev) => (prev === index ? null : index));
  };

  if (!collectionData) {
    return <div>{CollectionsLabel.NoData}</div>;
  }

  const {
    userProfileImage: profileImage = 'https://via.placeholder.com/38x38',
    nickname: name = '알 수 없음',
    collectionTitle: collectionName = '제목 없음',
    collectionContent: description = '설명 없음',
  } = collectionData;

  return (
    <S.Container>
      <S.Header
        backgroundImage={
          movies.length > 0 && movies[0].posterImage
            ? movies[0].posterImage
            : 'https://via.placeholder.com/640x260'
        }>
        <S.Overlay />
        <S.Profile>
          <S.ProfileImage src={profileImage} alt={`${name} 프로필`} />
          <S.UserName>{name}</S.UserName>
        </S.Profile>
        {isAuthor && (
          <S.MoreOptions onClick={handleMenuToggle} data-menu-toggle>
            <S.StyledSvgOption />
          </S.MoreOptions>
        )}
        {isOpen && openMenuId === collectionData.collectionId && (
          <S.DropdownMenu>
            <S.DropdownItem
              onClick={() => {
                closeMenu(); // 옵션 메뉴 닫기
                handleDeleteClick(); // 삭제 모달 열기
              }}>
              {CollectionsLabel.Delete}
            </S.DropdownItem>
            <S.DropdownItem
              onClick={() => {
                closeMenu(); // 옵션 메뉴 닫기
                handleEditClick(); // 수정 페이지로 이동
              }}>
              {CollectionsLabel.Edit}
            </S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.Header>

      <S.Content>
        <S.CollectionTitle>{collectionName}</S.CollectionTitle>
        <S.Description>{description}</S.Description>
        <S.Stats>
          {CollectionsLabel.Like} {likeCounts} {CollectionsLabel.Comment} {comments.length}
        </S.Stats>
      </S.Content>

      <S.ActionSection>
        <S.ActionButton onClick={handleLikeClick} disabled={liking}>
          <StyledSvgIcLikeFilled24 isLiked={isLiked} width="1rem" height="1rem" />
          <StyledLikeText isLiked={isLiked}>좋아요</StyledLikeText>
        </S.ActionButton>
        <S.ActionButton>
          <SvgComment width="1rem" height="1rem" />
          {CollectionsLabel.Comment}
        </S.ActionButton>
      </S.ActionSection>

      <S.MoviesSection>
        <S.SectionHeader>
          <S.SectionTitle>{CollectionsLabel.Movies}</S.SectionTitle>
          <S.TitleCount>{movies.length}</S.TitleCount>
        </S.SectionHeader>
        <Poster caseType={4} movies={movies} />
      </S.MoviesSection>

      <S.CommentSection>
        <S.SectionHeader>
          <S.SectionTitle>{CollectionsLabel.Comment}</S.SectionTitle>
          <S.TitleCount>{comments.length}</S.TitleCount>
        </S.SectionHeader>
        <S.CommentList>
          {comments.map((comment, index) => (
            <S.Comment key={index}>
              <S.CommentLeft>
                <S.CommentUserProfile
                  src={comment.profileImage || 'https://via.placeholder.com/38x38'}
                  alt={`${comment.nickname || '익명'} 프로필`}
                />
                <S.CommentDetails>
                  <S.CommentUser>{comment.nickname || '익명'}</S.CommentUser>
                  <S.CommentText>{comment.commentContent}</S.CommentText>
                </S.CommentDetails>
              </S.CommentLeft>
              <S.CommentTimeAndMenu>
                <S.CommentTime>{new Date(comment.createdAt).toLocaleString()}</S.CommentTime>
                {comment.nickname === userInfo?.nickname && ( // 작성자일 때만 표시
                  <>
                    <S.StyledCommentMenuIcon onClick={() => toggleCommentMenu(index)} />
                    {openCommentMenu === index && (
                      <S.CommentDropdown>
                        <S.DropdownItem
                          onClick={() => {
                            setOpenCommentMenu(null); // 메뉴 닫기
                            openEditModal({
                              comment: comment.commentContent,
                              collectionId: collectionData.collectionId,
                              collectionCommentId: comment.collectionCommentId,
                            });
                          }}>
                          수정
                        </S.DropdownItem>
                        <S.DropdownItem
                          onClick={() => {
                            setOpenCommentMenu(null);
                            openCommentModal({
                              collectionId: collectionData.collectionId,
                              collectionCommentId: comment.collectionCommentId,
                            });
                          }}>
                          삭제
                        </S.DropdownItem>
                      </S.CommentDropdown>
                    )}
                  </>
                )}
              </S.CommentTimeAndMenu>
            </S.Comment>
          ))}
        </S.CommentList>
        <S.CommentInputWrapper>
          <S.CommentInput
            placeholder={CollectionsLabel.Placeholder}
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <S.CommentButton onClick={handleCommentSubmit} disabled={isSubmittingComment}>
            <SvgComment width="1rem" height="1rem" /> {CollectionsLabel.Submit}
          </S.CommentButton>
        </S.CommentInputWrapper>
      </S.CommentSection>

      <EditModal />
      <CollectionsDeleteModal />
      <CollectionCommentDelete />
    </S.Container>
  );
};

export default CollectionDetail;

const S = {
  // 전체 컨테이너
  Container: styled.div`
    width: 40rem;
    background: ${(props) => props.theme.color.mainColor};
    border: 0.1rem solid ${(props) => props.theme.color.lineColor};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
  `,

  // 헤더 섹션
  Header: styled.div`
    position: relative;
    height: 16rem;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    overflow: hidden;
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
  `,
  ProfileImage: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 0.1rem solid ${(props) => props.theme.color.lineColor};
    margin-right: 0.5rem;
    background-color: ${(props) => props.theme.color.fontGray};
  `,
  UserName: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-weight: ${(props) => props.theme.font.fontWeightMedium};
    font-size: 1rem;
    color: ${(props) => props.theme.color.mainColor};
  `,

  // 메뉴 아이콘 및 드롭다운
  MoreOptions: styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
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
  DropdownMenu: styled.div`
    position: absolute;
    top: 2.5rem;
    right: 0;
    z-index: 10;
    background: ${(props) => props.theme.color.mainColor};
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    border-radius: 0.3rem;
    padding: 0.5rem 0;
    min-width: 8rem;
  `,
  DropdownItem: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.color.collectionColor};
    }
  `,

  // 본문 섹션
  Content: styled.div`
    padding: 1rem 1.25rem;
  `,
  CollectionTitle: styled.h1`
    margin-bottom: 0.4rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1.1rem;
  `,
  Description: styled.article`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  Stats: styled.div`
    margin-top: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  // 액션 버튼 섹션
  ActionSection: styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
    margin: 0 1rem;
    border-top: ${(props) => props.theme.font.borderDefault};
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  ActionButton: styled.button`
    display: flex;
    align-items: center;
    background: none;
    gap: 0.3rem;
    border: none;
    cursor: pointer;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  // 영화 섹션
  MoviesSection: styled.section`
    margin: 1.25rem;
  `,
  SectionHeader: styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  SectionTitle: styled.h2`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 1.5rem;
  `,
  TitleCount: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
  `,

  // 댓글 섹션
  CommentSection: styled.section`
    margin: 1rem;
  `,
  CommentList: styled.ul`
    margin-top: 1.5rem;
    list-style: none;
    padding: 0;
  `,
  Comment: styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0.5rem 0;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  CommentLeft: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  CommentUserProfile: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  `,
  CommentDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  `,
  CommentUser: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontBlack};
  `,
  CommentText: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  CommentTimeAndMenu: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  CommentTime: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  StyledCommentMenuIcon: styled(SvgOption)`
    width: 1.2rem;
    height: 1.2rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
  `,
  CommentDropdown: styled.div`
    position: absolute;
    top: 3rem;
    right: 0;
    z-index: 10;
    background: ${(props) => props.theme.color.mainColor};
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    color: ${(props) => props.theme.color.fontBlack};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    border-radius: 0.3rem;
    padding: 0.5rem 0;
    min-width: 8rem;
  `,

  // 댓글 입력
  CommentInputWrapper: styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  `,
  CommentInput: styled.input`
    flex: 1;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.color.commentColor};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    border: ${(props) => props.theme.font.borderDefault};
    border-radius: 0.3rem;
  `,
  CommentButton: styled.button`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: ${(props) => props.theme.color.commentColor};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  `,
};

const StyledSvgIcLikeFilled24 = styled(SvgIcLikeFilled24)`
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : 'inherit')};
`;

const StyledLikeText = styled.span`
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : 'inherit')};
`;
