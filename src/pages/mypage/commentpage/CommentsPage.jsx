import Comment from "../../../components/Features/comments/comment";
import { CardContainer, CommentPageContainer } from "../../../styles/comment/comment";

const CommentsPage = () => {
  return (
    <CommentPageContainer>
      <CardContainer>
        <Comment />
      </CardContainer>
    </CommentPageContainer>
  )
};

export default CommentsPage;
