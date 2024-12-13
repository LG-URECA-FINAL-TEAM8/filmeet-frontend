import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Poster from '../Common/poster/Poster';
import SvgOption from '../../assets/svg/Option';
import useCollectionsMenuStore from '../../store/collections/useCollectionsMenuStore';
import useCollectionsDeleteStore from '../../store/collections/useCollectionsDeleteStore';
import CollectionsDeleteModal from '../Common/modal/CollectionsDeleteModal';
import useCollectionsStore from '../../store/collections/useCollectionsStore';
import { useEffect, useState } from 'react';
import SvgIcLikeFilled24 from '../../assets/svg/IcLikeFilled24';
import SvgComment from '../../assets/svg/Comment';
import { useAddComment, useFetchComments } from '../../apis/myPage/collection/queries';
import useCommentDeleteStore from '../../store/collections/useCommentDeleteStore';
import CollectionCommentDelete from '../common/modal/CollectionCommentDelete';

const CollectionsLabel = {
  Like: "좋아요",
  Comment: "댓글",
  NoData: "데이터를 불러올 수 없습니다.",
  Movies: "작품들",
  Delete: "삭제",
  Edit: "수정하기",
  Submit: "등록",
  Placeholder: "컬렉션에 댓글을 남겨보세요.",
};

const CollectionDetail = ({ collectionData, movies }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setSelectedCollection,
    toggleLike,
    toggleCancelLike,
    liking,
    isLiked,
    initializeLikeStatus,
    collectionDetail,
  } = useCollectionsStore();

  const { openMenuId, isOpen, openMenu, closeMenu } = useCollectionsMenuStore();
  const { openModal } = useCollectionsDeleteStore();
  const { openModal: openCommentModal } = useCommentDeleteStore();

  // React Query Hooks
  const { data: comments = [], isLoading: isCommentsLoading } = useFetchComments(
    collectionData?.collectionId
  );
  const { mutate: addCommentMutation, isLoading: isSubmittingComment } = useAddComment();

  const [commentContent, setCommentContent] = useState("");
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
    if (liking) return; // 중복 요청 방지
    try {
      if (isLiked) {
        await toggleCancelLike(collectionData.collectionId); // 좋아요 취소 요청
      } else {
        await toggleLike(collectionData.collectionId); // 좋아요 추가 요청
      }
    } catch (error) {
      console.error("좋아요 상태 변경 중 오류 발생:", error);
    }
  };

  const handleCommentSubmit = () => {
    if (!commentContent.trim()) return alert("댓글 내용을 입력해주세요!");
    addCommentMutation(
      { collectionId: collectionData.collectionId, commentContent },
      {
        onSuccess: () => {
          setCommentContent(""); // 입력 필드 초기화
        },
        onError: (error) => {
          console.error("댓글 작성 중 오류 발생:", error);
        },
      }
    );
  };

  const toggleCommentMenu = (index) => {
    setOpenCommentMenu((prev) => (prev === index ? null : index));
  };

  const handleCommentDeleteClick = (comment) => {
    openCommentModal({
      collectionId: collectionData.collectionId, // 컬렉션 ID
      collectionCommentId: comment.id, // 댓글 ID
      commentContent: comment.commentContent, // 댓글 내용 (선택 사항)
    });
  };

  if (!collectionData) {
    return <div>{CollectionsLabel.NoData}</div>;
  }

  const {
    userProfileImage: profileImage = "https://via.placeholder.com/38x38",
    nickname: name = "알 수 없음",
    collectionTitle: collectionName = "제목 없음",
    collectionContent: description = "설명 없음",
    likeCounts: likes = 0,
  } = collectionData;

  return (
    <S.Container>
      <S.Header
        backgroundImage={
          movies.length > 0 && movies[0].posterImage
            ? movies[0].posterImage
            : "https://via.placeholder.com/640x260"
        }
      >
        <S.Overlay />
        <S.Profile>
          <S.ProfileImage src={profileImage} alt={`${name} 프로필`} />
          <S.UserName>{name}</S.UserName>
        </S.Profile>
        <S.MoreOptions onClick={handleMenuToggle} data-menu-toggle>
          <S.StyledSvgOption />
        </S.MoreOptions>
        {isOpen && openMenuId === collectionData.collectionId && (
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
          {CollectionsLabel.Like} {collectionDetail?.likeCounts || likes} {CollectionsLabel.Comment} {comments.length}
        </S.Stats>
      </S.Content>

      <S.ActionSection>
        <S.ActionButton onClick={handleLikeClick} disabled={liking}>
          <SvgIcLikeFilled24 width="1rem" height="1rem" />
          {isLiked ? `${CollectionsLabel.Like} 취소` : CollectionsLabel.Like}
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
                  src={
                    comment.profileImage || "https://via.placeholder.com/38x38"
                  }
                  alt={`${comment.nickname || "익명"} 프로필`}
                />
                <S.CommentDetails>
                  <S.CommentUser>
                    {comment.nickname || "익명"}
                  </S.CommentUser>
                  <S.CommentText>
                    {comment.commentContent}
                  </S.CommentText>
                </S.CommentDetails>
              </S.CommentLeft>
              <S.CommentTimeAndMenu>
                <S.CommentTime>
                  {new Date(comment.createdAt).toLocaleString()}
                </S.CommentTime>
                <S.StyledCommentMenuIcon
                  onClick={() => toggleCommentMenu(index)}
                />
                {openCommentMenu === index && (
                  <S.CommentDropdown>
                    <S.DropdownItem>수정</S.DropdownItem>
                    <S.DropdownItem
                      onClick={() =>
                        openCommentModal({
                          collectionId: collectionData.collectionId,
                          collectionCommentId: comment.collectionCommentId,
                          commentContent: comment.commentContent,
                        })
                      }
                    >
                      삭제
                    </S.DropdownItem>
                  </S.CommentDropdown>
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
    border: 1px solid ${(props) => props.theme.color.mainColor};
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
    margin-right: 0.5rem;
  `,
  UserName: styled.span`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
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
    font-size: 0.9rem;
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
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
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
    padding: 0.5rem 0;
    position: relative;
    border-bottom: ${(props) => props.theme.font.borderDefault};
  `,
  CommentLeft: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `,
  CommentUserProfile: styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  `,
  CommentDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  `,
  CommentUser: styled.span`
    font-weight: bold;
    font-size: 0.9rem;
    color: ${(props) => props.theme.color.fontBlack};
  `,
  CommentText: styled.span`
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
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  StyledCommentMenuIcon: styled(SvgOption)`
    width: 1.2rem;
    height: 1.2rem;
    color: ${(props) => props.theme.color.fontGray};
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.color.fontBlack};
    }
  `,
  CommentDropdown: styled.div`
    position: absolute;
    top: 3rem;
    right: 0rem;
    z-index: 10;
    background: ${(props) => props.theme.color.mainColor};
    color: ${(props) => props.theme.color.fontBlack};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
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
    border: 1px solid ${(props) => props.theme.color.borderDefault};
    border-radius: 0.3rem;
  `,
  CommentButton: styled.button`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background: ${(props) => props.theme.color.commentColor};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
  `,
};

