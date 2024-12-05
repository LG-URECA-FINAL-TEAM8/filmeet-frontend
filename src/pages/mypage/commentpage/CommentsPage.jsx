import Comment from "../../../components/Features/comments/comment";
import { CardContainer, CommentPageContainer } from "../../../styles/comment/comment";
import TopHeader from "../../../components/Common/back/TopHeader";

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
