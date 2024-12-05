import * as S from "../../../styles/rating/rating";
import MovieRatingList from "../../../components/rating/MovieRatingList";
import useRatingsStore from "../../../store/rating/useRatingsStore";
import ByRatingList from "../../../components/rating/ByRatingList";

const MovieRatingsPage = () => {
  const { activeFilter } = useRatingsStore();

  return (
    <S.RatingPageContainer>
      {activeFilter === "전체" ? <MovieRatingList /> : <ByRatingList />}
    </S.RatingPageContainer>
  );
};

export default MovieRatingsPage;
