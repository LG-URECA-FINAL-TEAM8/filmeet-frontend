import styled from "styled-components";
import SvgOption from "../../../assets/svg/Option";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import { useLikesStore } from "../../../store/comment/useLikesStore";
import { useMenuStore } from "../../../store/comment/useMenuStore";
import useCommentStore from "../../../store/modal/useCommentStore";

const TEXTS = {
  noComments: "댓글이 없습니다.",
  like: "좋아요",
  editComment: "댓글 수정",
  deleteComment: "댓글 삭제",
};

const createLikeKey = (type, id) => `${type}-${id}`;

const CommentList = ({ comments, onEdit }) => {
  const { likes, toggleLike } = useLikesStore();
  const { openMenuId, openMenu, closeMenu } = useMenuStore();
  const { openModal } = useCommentStore();

  if (!comments || comments.length === 0) {
    return <NoCommentMessage>{TEXTS.noComments}</NoCommentMessage>;
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
    onEdit ? onEdit(comment) : openModal("edit", { ...comment });
    closeMenu();
  };

  const handleDeleteClick = (comment) => {
    openModal("deleteComment", { ...comment });
    closeMenu();
  };

  return (
    <CommentContainer>
      {comments.map((comment) => {
        const likeKey = createLikeKey("list", comment.id);
        const commentLikes = likes[likeKey] || { count: 0, isLiked: false };
        const isMenuOpen = openMenuId === comment.id;

        return (
          <CommentWrapper key={comment.id}>
            <CommentItem>
              <UserProfile src={comment.userImage} alt={comment.userName} />
              <CommentContent>
                <UserHeader>
                  <UserName>{comment.userName}</UserName>
                  <CommentTime>{comment.time}</CommentTime>
                </UserHeader>
                <CommentText>{comment.content}</CommentText>
                <ActionRow>
                  <LikeSection onClick={() => handleLikeClick(comment.id)}>
                    {TEXTS.like}
                    <StyledSvgIcLikeFilled24 isLiked={commentLikes.isLiked} />
                    {commentLikes.count}
                  </LikeSection>
                  <SvgOptionWrapper>
                    <SvgOption onClick={() => handleMenuToggle(comment.id)} />
                    {isMenuOpen && (
                      <OptionsMenu>
                        <MenuItem onClick={() => handleEditClick(comment)}>
                          {TEXTS.editComment}
                        </MenuItem>
                        <MenuItem onClick={() => handleDeleteClick(comment)}>
                          {TEXTS.deleteComment}
                        </MenuItem>
                      </OptionsMenu>
                    )}
                  </SvgOptionWrapper>
                </ActionRow>
              </CommentContent>
            </CommentItem>
          </CommentWrapper>
        );
      })}
    </CommentContainer>
  );
};

export default CommentList;

const CommentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0;
  padding: 0;
  margin: 2rem 0 0 0;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 0.06rem solid ${(props) => props.theme.color.commentColor};
`;

const CommentItem = styled.li`
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
`;

const UserProfile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.75rem;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const UserHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.font.fontSuitBold};
`;

const CommentTime = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
`;

const CommentText = styled.p`
  font-size: 0.9rem;
  margin: 0.12rem 0 0.56rem;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  color: ${(props) => props.theme.color.fontGray};
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LikeSection = styled.div`
  display: flex;
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.fontGray};
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
`;

const SvgOptionWrapper = styled.div`
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
`;

const OptionsMenu = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  background: ${(props) => props.theme.color.mainColor};
  border: 0.06rem solid #ccc;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.37rem rgba(0, 0, 0, 0.1);
  width: 6.25rem;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 0.31rem;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.commentColor};
  }
`;

const NoCommentMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontGray};
`;

const StyledSvgIcLikeFilled24 = styled(SvgIcLikeFilled24)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
`;
