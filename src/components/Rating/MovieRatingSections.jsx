import { movies } from '../../data/movies';
import Poster from '../../components/Common/poster/Poster';
import { groupMoviesByRating } from '../../utils/ratings/groupMoviesRatings';
import { MovieContainer, SectionContainer, SectionTitle } from '../../styles/rating/rating';


const MovieRatingSections = () => {

  const ratings = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5];
  const groupedMovies = groupMoviesByRating(movies, ratings);

  return (
    <>
      {ratings.map((rating) => (
        <SectionContainer key={rating}>
          <SectionTitle>{`${rating.toFixed(1)} 평가함 ${groupedMovies[rating].length}`}</SectionTitle>
          
            <Poster caseType={5} movies={groupedMovies[rating]} />
          
        </SectionContainer>
      ))}
    </>
  );
};

export default MovieRatingSections;
