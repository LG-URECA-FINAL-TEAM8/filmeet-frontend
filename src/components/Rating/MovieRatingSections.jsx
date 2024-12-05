import { movies } from '../../data/movies';
import Poster from '../Common/poster/Poster';
import { groupMoviesByRating } from '../../utils/ratings/groupMoviesRatings';
import * as S from '../../styles/rating/rating';
import { useNavigate } from 'react-router-dom';
import { pagecontents } from '../../data/pagecontents';

const MovieRatingSections = () => {
  const navigate = useNavigate();
  const { sectionTitle, noResults, moreButton, ratings } = pagecontents.movieRatingSections;
  const groupedMovies = groupMoviesByRating(movies, ratings);

  const handleMoreClick = (rating) => () => {
    navigate(`/mypage/contents/movies/ratings/${rating}`);
  };

  const renderContent = (moviesForRating) => {
    if (moviesForRating.length > 0) {
      return <Poster caseType={7} movies={moviesForRating.slice(0, 10)} />;
    }
    return <S.NoResults>{noResults}</S.NoResults>;
  };

  return (
    <>
      {ratings.map((rating) => (
        <S.SectionContainer key={rating}>
          <S.SectionHeader>
            <S.SectionTitle>
              {`${rating.toFixed(1)} ${sectionTitle}`}
              <S.SectionCount>{groupedMovies[rating]?.length || 0}</S.SectionCount>
            </S.SectionTitle>   
              <S.MoreButton onClick={handleMoreClick(rating)}>
                {moreButton}
              </S.MoreButton>           
          </S.SectionHeader>
          {renderContent(groupedMovies[rating] || [])}
        </S.SectionContainer>
      ))}
    </>
  );
};

export default MovieRatingSections;
