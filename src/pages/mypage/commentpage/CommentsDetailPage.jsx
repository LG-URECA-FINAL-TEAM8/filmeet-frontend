import { useParams } from 'react-router-dom';
import CommentHeader from '../../../components/commentDetail/CommentHeader';
import CommentBody from '../../../components/commentDetail/CommentBody';
import { CommentDetailContainer } from '../../../styles/comment/comment';
import { useCommentDetails } from '../../../apis/commentDetails/queries';
import CommentList from '../../../components/features/comments/CommentList';
import { useUserInfo } from '../../../apis/users/queries';

const CommentsDetailPage = () => {
  const { reviewId } = useParams(); // URL에서 reviewId 추출
  const { data: result } = useUserInfo();
  const userInfo = result?.data;
  const { data: commentData } = useCommentDetails({ reviewId });

  return (
    <CommentDetailContainer>
      <CommentHeader commentData={commentData} userInfo={userInfo} />
      <CommentBody commentData={commentData} reviewId={reviewId} />
      {/* commentData에서 댓글 목록만 추출하여 CommentList에 전달 */}
      <CommentList comments={commentData?.comments || []} reviewId={reviewId} userInfo={userInfo} />
    </CommentDetailContainer>
  );
};

export default CommentsDetailPage;
