import Banner from "../../components/features/movieDetail/Banner";
import CastAndCrew from "../../components/features/movieDetail/CastAndCrew";
import Content from "../../components/features/movieDetail/Content";
import MovieComment from "../../components/features/movieDetail/MovieComment";
import { comments } from "../../data/comments";

function MovieDetail() {
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

