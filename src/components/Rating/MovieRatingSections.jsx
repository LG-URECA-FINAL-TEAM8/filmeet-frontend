import { movies } from '../../data/movies';
import Poster from '../../components/Common/poster/Poster';
import { groupMoviesByRating } from '../../utils/ratings/groupMoviesRatings';
import { MoreButton, NoResults, SectionContainer, SectionCount, SectionHeader, SectionTitle } from '../../styles/rating/rating';
import { useNavigate } from 'react-router-dom';
import { pagecontents } from '../../data/pagecontents';

const MovieRatingSections = () => {
  const navigate = useNavigate();
  const { sectionTitle, noResults, moreButton, ratings } = pagecontents.movieRatingSections;
  const groupedMovies = groupMoviesByRating(movies, ratings);

  const handleMoreClick = (rating) => () => {
    navigate(`/mypage/contents/movies/ratings/${rating}`);
  };

  return (
    <>
      {ratings.map((rating) => (
        <SectionContainer key={rating}>
          <SectionHeader>
            <SectionTitle>
              {`${rating.toFixed(1)} ${sectionTitle}`}
              <SectionCount>{groupedMovies[rating]?.length || 0}</SectionCount>
            </SectionTitle>
            {groupedMovies[rating]?.length > 0 && (
              <MoreButton onClick={handleMoreClick(rating)}>
                {moreButton}
              </MoreButton>
            )}
          </SectionHeader>
          {groupedMovies[rating]?.length > 0 ? (
            <Poster caseType={7} movies={groupedMovies[rating].slice(0, 10)} />
          ) : (
            <NoResults>{noResults}</NoResults>
          )}
        </SectionContainer>
      ))}
    </>
  );
};

export default MovieRatingSections;
