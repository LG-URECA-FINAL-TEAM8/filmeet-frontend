import styled from "styled-components";
import SvgOption from "../../../assets/svg/Option";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import { useLikesStore } from "../../../store/comment/useLikesStore";
import { useMenuStore } from "../../../store/comment/useMenuStore";
import useCommentStore from "../../../store/modal/useCommentStore";
import { useFetchComments } from "../../../apis/commentDetails/queries";
import { pagecontents } from "../../../data/pagecontents";




const createLikeKey = (type, id) => `${type}-${id}`;

const CommentList = ({ reviewId, userInfo, onEdit }) => { 
  const { data: comments, isLoading, isError, error } = useFetchComments({ reviewId });
  const { editComment,  deleteComment, noComments } = pagecontents.commentPageContent;
  const { likes, toggleLike } = useLikesStore();
  const { openMenuId, openMenu, closeMenu } = useMenuStore();
  const { openModal } = useCommentStore();

  if (isLoading) {
    return <div>댓글을 불러오는 중...</div>;
  }

  if (isError) {
    return <div>댓글을 불러오는 데 오류가 발생했습니다: {error.message}</div>;
  }

  if (!Array.isArray(comments)) {
    return <div>댓글을 불러오는 데 문제가 발생했습니다.</div>;
  }

  if (comments.length === 0) {
    return <S.NoCommentMessage>{noComments}</S.NoCommentMessage>;
  }

  const handleLikeClick = (id) => {
    toggleLike(createLikeKey("list", id));
  };

  const handleMenuToggle = (id) => {
    if (openMenuId === id) {
      closeMenu();
    } else {
      openMenu(id);
    }
  };

  const handleEditClick = (comment) => {
    onEdit ? onEdit(comment) : openModal("commentedit", { ...comment });
    closeMenu();
  };

  const handleDeleteClick = (comment) => {
    console.log("리뷰 ID:", reviewId);
    openModal("deleteComment", { reviewId, commentId: comment.reviewCommentId });
    closeMenu();
  };

  return (
    <S.CommentContainer>
      {comments.map((comment) => {
        const isMenuOpen = openMenuId === comment.reviewCommentId;
        const isAuthor = comment.nickName === userInfo?.nickname; // 작성자인지 확인

        return (
          <S.CommentWrapper key={comment.reviewCommentId}>
            <S.CommentItem>
              <S.UserProfile src={comment.profileImage} alt={comment.nickName} />
              <S.CommentContent>
                <S.UserHeader>
                  <S.UserName>{comment.nickName}</S.UserName>
                  <S.CommentTime>{comment.createdAt}</S.CommentTime>
                </S.UserHeader>
                <S.CommentText>{comment.content}</S.CommentText>
                <S.ActionRow>
                  <S.LikeSection onClick={() => handleLikeClick(comment.reviewCommentId)} />
                  {isAuthor && ( 
                    <S.SvgOptionWrapper>
                      <SvgOption onClick={() => handleMenuToggle(comment.reviewCommentId)} />
                      {isMenuOpen && (
                        <S.OptionsMenu>
                          <S.MenuItem onClick={() => handleEditClick(comment)}>
                            {editComment}
                          </S.MenuItem>
                          <S.MenuItem onClick={() => handleDeleteClick(comment)}>
                            {deleteComment}
                          </S.MenuItem>
                        </S.OptionsMenu>
                      )}
                    </S.SvgOptionWrapper>
                  )}
                </S.ActionRow>
              </S.CommentContent>
            </S.CommentItem>
          </S.CommentWrapper>
        );
      })}
    </S.CommentContainer>
  );
};

export default CommentList;

const S = {
  CommentContainer: styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0;
    padding: 0;
    margin: 2rem 0 0 0;
  `,
  CommentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 0.06rem solid ${(props) => props.theme.color.commentColor};
  `,
  CommentItem: styled.li`
    display: flex;
    align-items: flex-start;
    padding: 0.75rem 0;
    list-style: none;

    &:first-of-type {
      border-top: none;
    }

    &:last-of-type {
      border-bottom: 0.06rem solid ${(props) => props.theme.color.commentColor};
    }
  `,
  UserProfile: styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  `,
  CommentContent: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `,
  UserHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  UserName: styled.span`
    font-size: 0.9rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
  CommentTime: styled.span`
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  CommentText: styled.p`
    font-size: 0.9rem;
    margin: 0.12rem 0 0.56rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
  `,
  ActionRow: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  LikeSection: styled.div`
    display: flex;
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
  `,
  SvgOptionWrapper: styled.div`
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme.color.fontGray};
      cursor: pointer;
    }
  `,
  OptionsMenu: styled.div`
    position: absolute;
    top: 1.5rem;
    right: 0;
    background: ${(props) => props.theme.color.mainColor};
    border: 0.06rem solid #ccc;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
    width: 6.25rem;
    z-index: 10;
  `,
  MenuItem: styled.div`
    padding: 0.31rem;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.color.commentColor};
    }
  `,
  NoCommentMessage: styled.div`
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
  StyledSvgIcLikeFilled24: styled(SvgIcLikeFilled24)`
    width: 1rem;
    height: 1rem;
    color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
  `,
};
