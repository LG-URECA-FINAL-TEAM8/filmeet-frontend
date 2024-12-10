import Banner from "../../components/features/movieDetail/Banner";
import CastAndCrew from "../../components/features/movieDetail/CastAndCrew";
import Content from "../../components/features/movieDetail/Content";
import MovieComment from "../../components/features/movieDetail/MovieComment";
import { movieDetailData } from "../../data/moviedetail";

function MovieDetail() {
  const comments = movieDetailData.content;

  return (
    <>      
      <Banner />
      <Content />
      <CastAndCrew />
      <MovieComment comments={comments} />
    </>
  );
}

export default MovieDetail;

