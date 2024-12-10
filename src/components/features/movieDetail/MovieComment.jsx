import styled from "styled-components";
import MiniComment from "./MiniComment";
import { useNavigate } from "react-router-dom";
import { movieDetailData } from "../../../data/moviedetail";

function MovieComment() {
    const navigate = useNavigate();

    const comments = movieDetailData.movieReviewsResponses.content;

    const handleMoreClick = () => {
        navigate(`/moviedetail/moviecomment`);
      };

    const moviecomment = {
      comment: "코멘트",
      more: "더보기",
    }

  return (
    <S.MovieCommentContainer>
      <S.CommentHeader>
        <S.SectionTitle>
          {moviecomment.comment} 
          <S.CommentCount>{comments.length}+</S.CommentCount>
        </S.SectionTitle>
        <S.ShowMoreButton onClick={handleMoreClick}>{moviecomment.more}</S.ShowMoreButton>
      </S.CommentHeader>
      <S.CommentGrid>
        {comments.map((item) => (
          <MiniComment key={item.reviewId} {...item} />
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
    max-width: 84rem;
    height: 40rem;
    margin: 0 18.75rem;
    padding: 0 0 2.5rem;
  `,

  CommentHeader: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.8rem;
    margin-bottom: 1.3rem;
  `,

  SectionTitle: styled.header`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  CommentCount: styled.div`
    margin-left: 0.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontPink};
  `,

  CommentGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  ShowMoreButton: styled.div`
    padding: 0.5rem 1rem;
    border: none;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontPink};
    cursor: pointer;
  `,
};


