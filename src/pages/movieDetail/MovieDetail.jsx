import Banner from '../../components/features/movieDetail/Banner';
import CastAndCrew from '../../components/features/movieDetail/CastAndCrew';
import Content from '../../components/features/movieDetail/Content';
import MovieComment from '../../components/features/movieDetail/MovieComment';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from '../../apis/movieDetail/query';

function MovieDetail() {
  const { id } = useParams();
  const { data: movieDetail } = useMovieDetail(id);
  const movieDetailData = movieDetail?.data;
  const castDetailData = movieDetail?.data?.personnels;
  return (
    <>
      <Banner movieData={movieDetailData} />
      <Content movieData={movieDetailData} />
      <CastAndCrew castData={castDetailData} />
      <MovieComment />
    </>
  );
}

export default MovieDetail;
