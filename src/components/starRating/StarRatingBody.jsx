import styled from 'styled-components';
import { Rate } from 'antd';
import { useStarRatingStore } from '../../store/starrating/useStarRatingStore';
import { useEvaluation } from '../../apis/getMovies/queries';
import { useRef } from 'react';
import useScrollHandler from '../../hooks/evaluation/useScrollHandler';
import { useMovieEvaluation } from '../../apis/evaluation/query';
const StarRatingBody = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useEvaluation();
  const { ratings, setRating } = useStarRatingStore();
  // 모든 페이지의 영화 데이터 평탄화
  const allMovies = data?.pages.flatMap((page) => page.data.content) || [];
  const containerRef = useRef(null);
  const { mutate: evaluationMutate } = useMovieEvaluation();

  const handleScroll = useScrollHandler(
    containerRef,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  );
  const handleRateChange = (ratingScore, movieId) => {
    setRating(movieId, ratingScore);
    evaluationMutate({ movieId, ratingScore });
  };

  return (
    <S.BodyContainer ref={containerRef} onScroll={handleScroll}>
      {allMovies.map((movie) => (
        <S.MovieCard key={movie.movieId}>
          <S.MoviePoster style={{ backgroundImage: `url(${movie.posterUrl})` }} />
          <S.MovieInfo>
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.MovieDetails>{movie.releaseDate}</S.MovieDetails>
            <S.RatingStars>
              <StyledRate
                allowHalf
                value={ratings[movie.movieId] || 0}
                onChange={(value) => handleRateChange(value, movie.movieId)}
              />
            </S.RatingStars>
          </S.MovieInfo>
        </S.MovieCard>
      ))}
      {isFetchingNextPage && <S.LoadingIndicator>더 많은 영화 로딩 중...</S.LoadingIndicator>}
    </S.BodyContainer>
  );
};

export default StarRatingBody;

const S = {
  BodyContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 45rem;
    border: 0.06rem solid ${(props) => props.theme.color.lineColor};
    overflow-y: auto;
  `,

  MovieCard: styled.li`
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    background-color: ${(props) => props.theme.color.mainColor};
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 1.25rem;
      right: 1.25rem;
      height: 0.06rem;
      background-color: ${(props) => props.theme.color.lineColor};
    }
  `,

  MoviePoster: styled.div`
    width: 4.37rem;
    height: 6.25rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.25rem;
    margin-right: 1rem;
  `,

  MovieInfo: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 0 0.12rem;
  `,

  MovieTitle: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1rem;
    color: ${(props) => props.theme.color.fontBlack};
    margin: 0 0 0.12rem;
  `,

  MovieDetails: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 0.8rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 1.31rem;
  `,

  RatingStars: styled.div`
    width: 12.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  LoadingIndicator: styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: ${(props) => props.theme.color.fontGray};
  `,
};

const StyledRate = styled(Rate)`
  font-size: 2.12rem;
  line-height: 2.5rem;
  color: ${(props) => props.theme.color.fontPink};
  width: 12.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .ant-rate-star {
    margin-right: 0.31rem;
  }

  .ant-rate-star-full {
    color: ${(props) => props.theme.color.fontPink};
  }
`;
