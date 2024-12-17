import * as S from '../../../styles/rating/rating';
import MovieRatingList from '../../../components/rating/MovieRatingList';
import useRatingsStore from '../../../store/rating/useRatingsStore';
import ByRatingList from '../../../components/rating/ByRatingList';
import { useParams } from 'react-router-dom';

const MovieRatingsPage = () => {
  const { activeFilter } = useRatingsStore();
  const { userId } = useParams();

  return (
    <S.RatingPageContainer>
      {activeFilter === '전체' ? (
        <MovieRatingList userId={userId} />
      ) : (
        <ByRatingList userId={userId} />
      )}
    </S.RatingPageContainer>
  );
};

export default MovieRatingsPage;
