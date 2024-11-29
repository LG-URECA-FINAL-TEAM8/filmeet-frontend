import styled from "styled-components";
import SvgOption from "../../../assets/svg/Option";
import SvgIcLikeFilled24 from "../../../assets/svg/IcLikeFilled24";
import { useLikesStore } from "../../../store/comment/useLikesStore";

const CommentList = ({ comments }) => {
  const { likes, toggleLike } = useLikesStore();

  if (!comments || comments.length === 0) {
    return <NoCommentMessage>댓글이 없습니다.</NoCommentMessage>;
  }

  const handleLikeClick = (id) => {
    toggleLike(`list-${id}`);
  };

  return (
    <CommentContainer>
      {comments.map((comment) => {
        const commentLikes = likes[`list-${comment.id}`] || { count: 0, isLiked: false };

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
                    좋아요
                    <StyledSvgIcLikeFilled24 isLiked={commentLikes.isLiked} />
                    {commentLikes.count}
                  </LikeSection>
                  <SvgOptionWrapper>
                    <SvgOption />
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

const CommentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 1320px;
  gap: 0;
  padding: 0;
  margin: 2rem 0 0 0;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.commentColor};
`;

const CommentItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
  border-top: 1px solid var(--color-divider);
  list-style: none;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    border-bottom: 1px solid var(--color-divider);
  }
`;

const UserProfile = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 12px;
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
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const CommentText = styled.p`
  font-size: 0.9rem;
  width: 1240px;
  margin: 2px 0 9px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  color: ${(props) => props.theme.color.fontGray};
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;

const LikeSection = styled.div`
  display: flex;
  font-size: 0.7rem;
  color: ${(props) => props.theme.color.fontGray};
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;

const SvgOptionWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  }
`;

const NoCommentMessage = styled.div`
  text-align: center;
  font-size: 1rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const StyledSvgIcLikeFilled24 = styled(SvgIcLikeFilled24)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
`;

export default CommentList;
