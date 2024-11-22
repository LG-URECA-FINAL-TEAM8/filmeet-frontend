import useRatingsStore from "../../store/rating/useRatingsStore";
import { MovieContainer, MovieImage, SectionContainer, SectionTitle } from "../../styles/rating/rating";

const MovieRatingSections = () => {
    const { movies } = useRatingsStore();
  
    const ratings = [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0.5];
    const sections = ratings.map((rating) => {
      const filteredMovies = movies.filter((movie) => movie.rating === rating);
  
      return {
        title: `${rating.toFixed(1)} 평가함 (${filteredMovies.length})`,
        movies: filteredMovies,
      };
    });
  
    return (
      <>
        {sections.map(({ title, movies }) => (
          <SectionContainer key={title}>
            <SectionTitle>{title}</SectionTitle>
            {movies.length > 0 ? (
              <MovieContainer>
                <MovieImage />
              </MovieContainer>
            ) : (
              <p>결과가 없어요.</p>
            )}
          </SectionContainer>
        ))}
      </>
    );
  };
  
  export default MovieRatingSections;