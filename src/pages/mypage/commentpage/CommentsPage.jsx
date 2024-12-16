import Comment from "../../../components/features/comments/Comment";
import { CardContainer, CommentPageContainer } from "../../../styles/comment/comment";
import TopHeader from "../../../components/common/back/TopHeader";

const CommentsPage = () => {
  return (
    <CommentPageContainer>
      <TopHeader title="코멘트" />
      <CardContainer>
        <Comment />
      </CardContainer>
    </CommentPageContainer>
  )
};

export default CommentsPage;
