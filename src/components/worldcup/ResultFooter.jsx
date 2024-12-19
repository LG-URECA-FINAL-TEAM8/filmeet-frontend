import styled from 'styled-components';
import SmallCard from './ResultSmallCard';
import { useRecommendMovies } from '../../apis/worldcup/queries';

const ResultFooter = ({ gameId }) => {
  const footerText =
    '당신의 선택에 따른 추천 및 인기 영화! 원하는 영화를 선택해서 평점을 남겨주세요.';

  // 추천 영화 가져오기
  const { data, isLoading, error } = useRecommendMovies(gameId);

  if (isLoading) return;
  if (error) return;

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
            movieId={movie.movieId}
            rating={movie.ratingCounts}
          />
        ))}
      </S.CardGrid>
    </S.Footer>
  );
};

export default ResultFooter;

const S = {
  Footer: styled.footer`
    margin-top: 1rem;
    width: 100%;
    height: 18.75rem;
    text-align: center;
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
