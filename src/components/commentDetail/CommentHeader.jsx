import styled from "styled-components";
import SvgPencil from "../../assets/svg/Pencil";
import SvgDelete from "../../assets/svg/Delete";
import useCommentStore from "../../store/modal/useCommentStore";
import { pagecontents } from "../../data/pagecontents";
import { useNavigate } from "react-router-dom";
import { createProfileClickHandler } from "../../utils/ratings/navigationHandlers";
import CommentEditModal from "../Common/modal/CommentEditModal";
import CommentDeleteModal from "../common/modal/CommentDeleteModal";


const CommentHeader = ({ commentData,userInfo }) => {
  const navigate = useNavigate();
  const { openModal } = useCommentStore();
  const isAuthor = commentData?.nickName === userInfo?.nickname;


  const { likeComment, comment, edit, deleteText } = pagecontents.commentPageContent;

  const handleProfileClick = createProfileClickHandler(navigate, "/mypage");

  const handleEditClick = () => {
    openModal("edit", commentData);
  };

  const handleDeleteClick = () => {
    if (commentData?.reviewId && commentData?.movieId) {
      console.log("Review ID:", commentData.reviewId);
      console.log("Movie ID:", commentData.movieId);
    } else {
      console.error("Review ID 또는 Movie ID가 존재하지 않습니다.");
    }
    openModal("deleteCommentary", commentData);
  };
  return (
    <>
      <S.Header>
        <S.MainContent>
          <S.LeftContent>
            <S.UserInfo>
              <S.UserDetails>
                <S.UserProfile
                  src={commentData?.profileImage} 
                  alt={commentData?.nickName}  
                  onClick={handleProfileClick}
                />
                <S.UserName onClick={handleProfileClick}>
                  {commentData?.nickName} 
                </S.UserName>
                <S.CommentTime>{commentData?.createdAt}</S.CommentTime>  {/* 수정: createdAt */}
              </S.UserDetails>
            </S.UserInfo>
            <S.MovieDetails>
              <S.MovieTitle>
                {commentData?.movieTitle} ({commentData?.movieReleaseDate?.slice(0, 4)})  {/* 수정: movieTitle, movieReleaseDate */}
              </S.MovieTitle>
              <S.MovieGenre>{commentData?.genre}</S.MovieGenre>  {/* 수정: genre */}
            </S.MovieDetails>
          </S.LeftContent>
          <S.MoviePoster src={commentData?.posterUrl} alt={commentData?.movieTitle} />  {/* 수정: posterUrl */}
        </S.MainContent>
        <S.Content>{commentData?.content}</S.Content>  {/* 수정: content */}
        <S.ActionRow>
          <S.ActionText>
            {likeComment} {commentData?.likeCounts} {comment} {commentData?.commentCounts}
          </S.ActionText>
          {isAuthor && (
        <S.ActionButtons>
          <S.EditButton onClick={handleEditClick}>
            <SvgPencil />
            {edit}
          </S.EditButton>
          <S.DeleteButton onClick={handleDeleteClick}>
            <SvgDelete />
            {deleteText}
          </S.DeleteButton>
        </S.ActionButtons>
      )}
        </S.ActionRow>
      </S.Header>
      <CommentEditModal />
      <CommentDeleteModal />
    </>
  );
};


const S = {

Header: styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.color.mainColor};
`,

MainContent: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`,

LeftContent: styled.div`
  height: 8rem; 
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,

UserInfo: styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,

UserProfile: styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`,

UserDetails: styled.div`
  display: flex;
  flex-direction: flex-start;
  justify-content: center;
  gap: 0.2rem;
`,

UserName: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  line-height: 2;
  cursor: pointer;
`,

CommentTime: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  line-height: 2;
  color: ${(props) => props.theme.color.fontGray};
`,

MovieDetails: styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,

MovieTitle: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1rem;
`,

MovieGenre: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.8rem;
  color: ${(props) => props.theme.color.fontGray};
`,

Content: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
`,

MoviePoster: styled.img`
  width: 4.3rem;
  height: 6.5rem;
  border-radius: 0.2rem;
  object-fit: cover;
`,

ActionRow: styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  height: 2.5rem;
`,

ActionText: styled.div`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 0.9rem;
  color: ${(props) => props.theme.color.fontGray};
`,

ActionButtons: styled.div`
  display: flex;
  align-items: center;
`,

EditButton: styled.button`
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
    border-radius: 0.3rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  }
`,

DeleteButton: styled.button`
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
`,
}
export default CommentHeader;
