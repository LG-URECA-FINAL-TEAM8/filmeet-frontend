import * as S from '../../styles/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Poster from '../common/poster/Poster';
import { createBackClickHandler } from '../../utils/ratings/navigationHandlers';
import { pagecontents } from '../../data/pagecontents';
import { useMovieRatings } from '../../apis/myPage/rating/queries';
import { useUserInfo } from '../../apis/users/queries';
const MoreRatingMovies = () => {
  const navigate = useNavigate();
  const { rating } = useParams();
  const parsedRating = parseFloat(rating);
  const { data: result } = useUserInfo();
  const userId = result?.data?.id;

  const { data, isLoading, error } = useMovieRatings(userId, 0, 100, 'createdAt,desc');
  const handleBackClick = createBackClickHandler(navigate, '/mypage/contents/movies/ratings');
  const { noResults } = pagecontents.moreRatingMovies;

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  // API 데이터에서 별점이 동일한 영화 필터링
  const moviesForRating =
    data?.data?.content?.filter((movie) => movie.ratingScore === parsedRating) || [];

  const renderMoviesContent = (movies) => {
    if (movies.length > 0) {
      return <Poster caseType={7} movies={movies} />;
    }
    return <S.NoResults>{noResults}</S.NoResults>;
  };

  return (
    <>
      <S.TopContainer>
        <S.BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.BackButton>
        <S.TopTitle>{`${parsedRating.toFixed(1)} 점 준 영화`}</S.TopTitle>
      </S.TopContainer>
      {renderMoviesContent(moviesForRating)}
    </>
  );
};

export default MoreRatingMovies;
