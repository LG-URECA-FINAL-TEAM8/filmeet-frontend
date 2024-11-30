import styled from "styled-components";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgComment from "../../assets/svg/Comment";
import { pagecontents } from "../../data/pagecontents";
import { useLikesStore } from "../../store/comment/useLikesStore";
import useCommentStore from "../../store/modal/useCommentStore";

const CommentBody = ({ commentData }) => {
  const { likes, toggleLike } = useLikesStore();
  const { like, comment } = pagecontents.commentPageContent;
  const { openModal } = useCommentStore();
  const commentLikes = likes[commentData.id] || { count: 0, isLiked: false };

  const handleLikeClick = () => {
    toggleLike(commentData.id);
  };

  const handleCommentClick = () => {
    openModal("comment", { title: commentData.title, content: "" });
  };

  return (
    <Body>
      <ActionContainer onClick={handleLikeClick}>
        <Action isLiked={commentLikes.isLiked}>
          <StyledSvgIcLikeFilled24 isLiked={commentLikes.isLiked} />
          {like}
        </Action>
      </ActionContainer>
      <Divider />
      <ActionContainer onClick={handleCommentClick}>
        <Action>
          <SvgComment />
          {comment}
        </Action>
      </ActionContainer>
    </Body>
  );
};

export const Body = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
  border-top: ${(props) => props.theme.font.borderDefault};
  border-bottom: ${(props) => props.theme.font.borderDefault};
`;

export const StyledSvgIcLikeFilled24 = styled(SvgIcLikeFilled24)`
  width: 1rem;
  height: 1rem;
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};
`;

export const ActionContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.mainColor};
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 0.3rem;
    box-shadow: 0 0.12rem 0.37rem rgba(0, 0, 0, 0.2);
  }
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 1rem;
  background-color: ${(props) => props.theme.color.commentColor};
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => (props.isLiked ? props.theme.color.fontPink : props.theme.color.fontGray)};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default CommentBody;
