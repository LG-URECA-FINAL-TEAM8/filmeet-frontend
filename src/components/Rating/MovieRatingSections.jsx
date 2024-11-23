import { movies } from '../../data/movies';
import Poster from '../../components/Common/poster/Poster';
import { groupMoviesByRating } from '../../utils/ratings/groupMoviesRatings';
import { MoreButton, NoResults, SectionContainer, SectionCount, SectionHeader, SectionTitle } from '../../styles/rating/rating';
import { useNavigate } from 'react-router-dom';


const MovieRatingSections = () => {
  const navigate = useNavigate();
  const ratings = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5];
  const groupedMovies = groupMoviesByRating(movies, ratings);

  return (
    <>
      {ratings.map((rating) => (
        <SectionContainer key={rating}>
          <SectionHeader>
            <SectionTitle>
              {`${rating.toFixed(1)} 평가함`}
              <SectionCount>{groupedMovies[rating]?.length || 0}</SectionCount>
            </SectionTitle>
            {groupedMovies[rating]?.length > 0 && (
              <MoreButton onClick={() => navigate(`/mypage/contents/movies/ratings/${rating}`)}>
                더보기
              </MoreButton>
            )}
          </SectionHeader>
          {groupedMovies[rating]?.length > 0 ? (
            <Poster caseType={7} movies={groupedMovies[rating].slice(0, 10)} />
          ) : (
            <NoResults>결과가 없습니다</NoResults>
          )}
        </SectionContainer>
      ))}
    </>
  );
};

export default MovieRatingSections;
