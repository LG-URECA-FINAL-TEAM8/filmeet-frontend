import { useParams } from "react-router-dom";
import CommentBody from "../../../components/CommentDetail/CommentBody";
import CommentHeader from "../../../components/CommentDetail/CommentHeader";
import { CommentDetailContainer } from "../../../styles/comment/comment";
import { comments } from "../../../data/comments";

const CommentsDetailPage = () => {
    const { commentId } = useParams();
    const commentData = comments.find((item) => item.id === Number(commentId));
  
    // 댓글 데이터가 없을 때
    if (!commentData) {
      return <div>댓글을 찾을 수 없습니다.</div>;
    }
  
    return (
      <CommentDetailContainer>
        <CommentHeader commentData={commentData} />
        <CommentBody commentData={commentData} />
      </CommentDetailContainer>
    );
  };

export default CommentsDetailPage;
