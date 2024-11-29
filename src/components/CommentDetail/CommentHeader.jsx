import styled from "styled-components";
import SvgPencil from "../../assets/svg/Pencil";
import SvgDelete from "../../assets/svg/Delete";
import useCommentStore from "../../store/modal/useCommentStore";
import CommentEditModal from "../Common/modal/CommentEditModal";
import { pagecontents } from "../../data/pagecontents"

const CommentHeader = ({ commentData }) => {
  const { openModal } = useCommentStore();

  const { likeComment, comment, count, edit, deleteText } = pagecontents.commentPageContent;

  const handleEditClick = () => {
    openModal(commentData);
  };

return (
  <>
  <Header>
    <MainContent>
      <LeftContent>
        <UserInfo>
          <UserProfile src={commentData.userImage} alt={commentData.userName} />
          <UserDetails>
            <UserName>{commentData.userName}</UserName>
            <CommentTime>{commentData.time}</CommentTime>
          </UserDetails>
        </UserInfo> 
        <MovieDetails>
          <MovieTitle>{commentData.title} ({commentData.year})</MovieTitle>
          <MovieGenre>{commentData.genre}</MovieGenre>
        </MovieDetails>
      </LeftContent>
        <MoviePoster src={commentData.image} alt={commentData.title} />
    </MainContent>
        <Content>{commentData.comment}</Content>
      <ActionRow>
        <ActionText>
          {likeComment} {comment} {count}
        </ActionText>
        <ActionButtons>
        <EditButton onClick={handleEditClick}><SvgPencil/>{edit}</EditButton>
        <DeleteButton><SvgDelete/>{deleteText}</DeleteButton>
        </ActionButtons>
      </ActionRow>
  </Header>

    <CommentEditModal
      onSubmit={(updatedComment) => {
        console.log("수정된 댓글:", updatedComment);
      }}
    />
  </>
  );
};

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.color.mainColor};
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const LeftContent = styled.div`
  height: 8rem; 
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserProfile = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const UserName = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1;
`;

export const CommentTime = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MovieTitle = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1.4rem;
  `;

export const MovieGenre = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const Content = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
`;

export const MoviePoster = styled.img`
  width: 6rem;
  height: 8rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  height: 2.5rem;
`;

export const ActionText = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0rem 0.6rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
  background-color: ${(props) => props.theme.color.mainColor};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  }
`;

export const  DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0rem 0.6rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
  background-color: ${(props) => props.theme.color.mainColor};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.commentColor};
    border-radius: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  }
`;

export default CommentHeader;
