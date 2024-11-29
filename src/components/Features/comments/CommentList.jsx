import styled from "styled-components";

const CommentList = ({ comments }) => {

  if (!comments || comments.length === 0) {
    return <div>댓글이 없습니다.</div>;
  }

  return (
    <CommentContainer>
      {comments.map((comment) => (
        <CommentItem key={comment.id}>
          <UserProfile src={comment.userImage} alt={comment.userName} />
          <CommentContent>
            <UserName>{comment.userName}</UserName>
            <CommentTime>{comment.time}</CommentTime>
            <CommentText>{comment.content}</CommentText>
          </CommentContent>
        </CommentItem>
      ))}
    </CommentContainer>
  );
};


const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const CommentItem = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const UserProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const CommentTime = styled.div`
  font-size: 0.8rem;
  color: gray;
`;

const CommentText = styled.div`
  font-size: 1rem;
`;

export default CommentList;
