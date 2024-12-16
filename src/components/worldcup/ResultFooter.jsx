import styled from "styled-components";
import SmallCard from "./ResultSmallCard";
import { useRecommendMovies } from "../../apis/worldcup/queries";


const ResultFooter = ({ gameId }) => {
  const footerText = "월드컵 결과에 따른 추천";

  // 추천 영화 가져오기
  const { data, isLoading, error } = useRecommendMovies(gameId);

  if (isLoading) return <div>추천 영화를 불러오는 중입니다...</div>;
  if (error) return <div>추천 영화 불러오기 실패: {error.message}</div>;

  // 추천 영화 데이터
  const recommendedMovies = data || [];

  return (
    <S.Footer>
      <S.FooterText>{footerText}</S.FooterText>
      <S.CardGrid>
        {recommendedMovies.map((movie) => (
          <SmallCard
            key={movie.movieId}
            title={movie.title}
            image={movie.posterUrl}
          />
        ))}
      </S.CardGrid>
    </S.Footer>
  );
};

export default ResultFooter;

const S = {
  Footer: styled.footer`
    width: 100%;
    height: 18.75rem;
    text-align: center;
    background-color: ${(props) => props.theme.color.commentColor};
    color: ${(props) => props.theme.color.fontPink};
    padding: 1rem 0 0 0;
  `,

  FooterText: styled.div`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  CardGrid: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  `,
};
