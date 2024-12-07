import styled from "styled-components";
import MiniComment from "./MiniComment";
import { useNavigate } from "react-router-dom";

function MovieComment({ comments }) {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate(`/moviedetail/moviecomment`);
      };

  return (
    <S.MovieCommentContainer>
      <S.CommentHeader>
        <S.SectionTitle>
          코멘트 
          <S.CommentCount>{comments.length}+</S.CommentCount>
        </S.SectionTitle>
        <S.ShowMoreButton onClick={handleMoreClick}>더보기</S.ShowMoreButton>
      </S.CommentHeader>
      <S.CommentGrid>
        {comments.map((item) => (
          <MiniComment key={item.id} {...item} />
        ))}
      </S.CommentGrid>
    </S.MovieCommentContainer>
  );
}

export default MovieComment;

const S = {
  MovieCommentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1320px;
    height: 632px;
    margin: 0 300px;
    padding: 0 0 40px;
  `,

  CommentHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    margin-bottom: 20px;
  `,

  SectionTitle: styled.header`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
    display: flex;
    align-items: center;
  `,

  CommentCount: styled.div`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontPink};
    margin-left: 0.5rem;
  `,

  CommentGrid: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    overflow: hidden;
  `,

  ShowMoreButton: styled.div`
    padding: 0.5rem 1rem;
    border: none;
    color: ${(props) => props.theme.color.fontPink};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    cursor: pointer;
  `,
};
