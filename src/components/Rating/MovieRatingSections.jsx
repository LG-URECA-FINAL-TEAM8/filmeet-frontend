import useRatingsStore from "../../store/rating/useRatingsStore";
import { MovieContainer, MovieImage, MovieInfo, MovieItem, MovieTitle, SectionContainer, SectionTitle } from "../../styles/rating/rating";

const MovieRatingSections = () => {
    const { movies } = useRatingsStore();
  
    const ratings = [5.0, 4.5, 4.0, 3.5, 3.0]; // 점수 배열
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
                {movies.map((movie) => (
                  <MovieItem key={movie.id}>
                    <MovieImage src={movie.image} alt={movie.title} />
                    <MovieInfo>
                      <MovieTitle>{movie.title}</MovieTitle>
                    </MovieInfo>
                  </MovieItem>
                ))}
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