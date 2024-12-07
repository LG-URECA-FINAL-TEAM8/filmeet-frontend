import TopHeader from "../../components/Common/back/TopHeader";
import Comment from "../../components/Features/comments/comment";
import { CardContainer, CommentPageContainer } from "../../styles/comment/comment";


const MovieComment = () => {
  return (
    <CommentPageContainer>
      <TopHeader title="코멘트" />
      <CardContainer>
        <Comment />
      </CardContainer>
    </CommentPageContainer>
  )
};

export default MovieComment;
