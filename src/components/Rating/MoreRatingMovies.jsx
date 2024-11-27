import * as S from "../../styles/rating/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { groupMoviesByRating } from "../../utils/ratings/groupMoviesRatings";
import { movies } from "../../data/movies";
import Poster from "../Common/poster/Poster";
import { createBackClickHandler } from "../../utils/ratings/navigationHandlers";
import { pagecontents } from "../../data/pagecontents";

const MoreRatingMovies = () => {
  const navigate = useNavigate();
  const { rating } = useParams();

  const groupedMovies = groupMoviesByRating(movies, [parseFloat(rating)]);
  const moviesForRating = groupedMovies[parseFloat(rating)] || [];
  const handleBackClick = createBackClickHandler(navigate, "/mypage/contents/movies/ratings");

  const { noResults } = pagecontents.moreRatingMovies;

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
        <S.TopTitle>{`${parseFloat(rating).toFixed(1)} 점 준 영화`}</S.TopTitle>
      </S.TopContainer>
      {renderMoviesContent(moviesForRating)}
    </>
  );
};

export default MoreRatingMovies;
