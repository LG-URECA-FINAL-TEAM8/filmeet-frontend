import styled from "styled-components";
import SvgIcLikeFilled24 from "../../assets/svg/IcLikeFilled24";
import SvgComment from "../../assets/svg/Comment";
import { pagecontents } from "../../data/pagecontents"
import useLikesStore from "../../store/comment/useLikesStore";

const CommentBody = ({ commentId, initialLikeCount }) => {
  const { likes, toggleLike } = useLikesStore();
  const { like, comment } = pagecontents.commentPageContent;

  const commentLikes = likes[commentId] || { count: initialLikeCount || 0, isLiked: false };

  const handleLikeClick = () => {
    toggleLike(commentId, initialLikeCount); // 상태 업데이트
    console.log("Updated likes:", likes[commentId]);
  };

  return (
    <Body>
      <ActionContainer onClick={handleLikeClick}>
        <Action>
          <SvgIcLikeFilled24 />
          {like} {commentLikes.count}
        </Action>
      </ActionContainer>
      <Divider />
      <ActionContainer>
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
  color: ${(props) => props.theme.color.fontGray};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export default CommentBody;
