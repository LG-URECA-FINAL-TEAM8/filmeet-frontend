import Banner from '../../components/features/movieDetail/Banner';
import CastAndCrew from '../../components/features/movieDetail/CastAndCrew';
import Content from '../../components/features/movieDetail/Content';
import MovieComment from '../../components/features/movieDetail/MovieComment';
import { useParams } from 'react-router-dom';
import { useMovieDetail, useMovieComment } from '../../apis/movieDetail/query';

function MovieDetail() {
  const { id } = useParams();
  const { data: movieDetail } = useMovieDetail(id);
  const { data: movieComment } = useMovieComment(id);
  const movieDetailData = movieDetail?.data;
  const castDetailData = movieDetail?.data?.personnels;
  const movieCommentData = movieComment?.data?.content || [];
  console.log(movieCommentData);
  return (
    <>
      <Banner movieData={movieDetailData} />
      <Content movieData={movieDetailData} movieId={id} />
      <CastAndCrew castData={castDetailData} />
      <MovieComment comment={movieCommentData} id={id} />
    </>
  );
}

export default MovieDetail;
