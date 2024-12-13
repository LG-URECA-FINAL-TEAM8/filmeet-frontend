import { useGenreMovies } from '../../apis/getMovies/queries';
import Poster from '../../components/Common/poster/Poster';
import { MainBody } from '../../styles/main/main';
import Title from '../../components/features/main/title/Title';
import genresText from '../../data/main/text';

function GenreMovie() {
  const genreQueries = useGenreMovies();

  return (
    <MainBody>
      {Object.entries(genresText).map(([genreKey, genreText]) => (
        <div key={genreKey}>
          <Title>{genreText}</Title>
          <Poster
            caseType={1}
            movies={
              genreQueries[Object.keys(genresText).indexOf(genreKey)]?.data?.data?.content || []
            }
          />
        </div>
      ))}
    </MainBody>
  );
}

export default GenreMovie;
