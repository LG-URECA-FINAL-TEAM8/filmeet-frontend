import styled from "styled-components";
import SvgPencil from "../../assets/svg/Pencil";
import SvgDelete from "../../assets/svg/Delete";
import useCommentStore from "../../store/modal/useCommentStore";
import CommentEditModal from "../Common/modal/CommentEditModal";

const CommentHeader = ({ commentData }) => {
  const { openModal } = useCommentStore();

  const handleEditClick = () => {
    openModal(commentData); // Zustand 상태를 업데이트하고 모달 열기
  };

    return (
      <>
      <S.Header>
        <S.MainContent>
          <S.LeftContent>
            <S.UserInfo>
              <S.UserProfile src={commentData.userImage} alt={commentData.userName} />
              <S.UserDetails>
                <S.UserName>{commentData.userName}</S.UserName>
                <S.CommentTime>5분 전</S.CommentTime>
              </S.UserDetails>
            </S.UserInfo> 
            <S.MovieDetails>
              <S.MovieTitle>{commentData.title} ({commentData.year})</S.MovieTitle>
              <S.MovieGenre>{commentData.genre}</S.MovieGenre>
            </S.MovieDetails>
            <S.Content>{commentData.comment}</S.Content>
          </S.LeftContent>
          <S.MoviePoster src={commentData.image} alt={commentData.title} />
        </S.MainContent>
        <S.ActionRow>
          <S.ActionText>
            가장 먼저 좋아요를 누르세요 댓글0
          </S.ActionText>
          <S.ActionButtons>
            <S.EditButton onClick={handleEditClick}><SvgPencil/>수정</S.EditButton>
            <S.DeleteButton><SvgDelete/>삭제</S.DeleteButton>
          </S.ActionButtons>
        </S.ActionRow>
      </S.Header>

      {/* 댓글 수정 모달 */}
      <CommentEditModal
        onSubmit={(updatedComment) => {
          console.log("수정된 댓글:", updatedComment);
          // 댓글 업데이트 로직 추가 가능
        }}
      />
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  `,

  UserInfo: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,

  UserProfile: styled.img`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    object-fit: cover;
  `,

  UserDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `,

  UserName: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.7rem;
    font-weight: bold;
    line-height: 1;
  `,

  CommentTime: styled.div`
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  MovieDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  MovieTitle: styled.div`
    font-size: 1.4rem;
    font-weight: bold;
  `,

  MovieGenre: styled.div`
    font-size: 0.7rem;
    color: ${(props) => props.theme.color.fontGray};
  `,

  Content: styled.div`
    font: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
  `,

  MoviePoster: styled.img`
    width: 6rem;
    height: 8rem;
    border-radius: 0.5rem;
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
    text-decoration: underline;
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
    text-decoration: underline;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  }
  `,
};

export default CommentHeader;
