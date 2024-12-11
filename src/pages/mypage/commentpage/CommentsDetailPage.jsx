import { useParams } from "react-router-dom";
import CommentBody from "../../../components/commentDetail/CommentBody";
import CommentHeader from "../../../components/commentDetail/CommentHeader";
import { CommentDetailContainer } from "../../../styles/comment/comment";
import { comments } from "../../../data/comments";
import CommentList from "../../../components/features/comments/CommentList";
import { commentslist } from "../../../data/commentslist";
import { useLikesStore } from "../../../store/comment/useLikesStore";

const CommentsDetailPage = () => {
    const { commentId } = useParams();
    const commentData = comments.find((item) => item.id === Number(commentId));
    const { likes } = useLikesStore();
    const likeState = likes[commentData.id] || { count: commentData.likeCount || 0, isLiked: false };

    return (
      <CommentDetailContainer>
        <CommentHeader commentData={commentData} likeState={likeState} />
        <CommentBody commentData={commentData} />
        <CommentList comments={commentslist || []}/>
      </CommentDetailContainer>
    );
  };

export default CommentsDetailPage;
