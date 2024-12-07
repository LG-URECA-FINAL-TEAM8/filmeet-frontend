import styled from "styled-components";
import Banner from "../../components/features/movieDetail/Banner";
import CastAndCrew from "../../components/features/movieDetail/CastAndCrew";
import Content from "../../components/features/movieDetail/Content";
import MovieComment from "../../components/features/movieDetail/MovieComment";

const comments = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  userImage: "https://via.placeholder.com/40",
  userName: `User ${index + 1}`,
  title: `Movie Title ${index + 1}`,
  comment: `This is a comment for Movie Title ${index + 1}`,
  rating: Math.random() * 5,
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 50),
}));

function MovieDetail() {
  return (
    <>
      <PageWrapper>
        <Banner />
        <Content />
      </PageWrapper>
      <CastAndCrew />
      <MovieComment comments={comments} />
    </>
  );
}

export default MovieDetail;

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.color.commentColor};
  width: 100%;
  height: 100%;
`;
