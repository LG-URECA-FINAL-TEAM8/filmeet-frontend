import React from 'react';
import { BackButton, TopContainer, TopTitle } from '../../../styles/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from 'react-router-dom';
import { groupMoviesByRating } from '../../../utils/ratings/groupMoviesRatings';
import { movies } from '../../../data/movies';
import Poster from '../../../components/Common/poster/Poster';

const PageContent = {
  noResults: "결과가 없습니다."
}

const AllMoviesByRatingPage = () => { 
  const navigate = useNavigate(); 
  const { rating } = useParams();

  const groupedMovies = groupMoviesByRating(movies, [parseFloat(rating)]);
  const moviesForRating = groupedMovies[parseFloat(rating)] || [];

  const handleBackClick = () => {
    navigate('/mypage/contents/movies/ratings')
  };

  return (
     <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>{`${parseFloat(rating).toFixed(1)} 점 준 영화`}</TopTitle>
      </TopContainer>
      {moviesForRating.length > 0 ? (
        <Poster caseType={7} movies={moviesForRating} />
      ) : (
        <div>{PageContent.noResults}</div>
      )}
    </>
  );
};


export default AllMoviesByRatingPage;
