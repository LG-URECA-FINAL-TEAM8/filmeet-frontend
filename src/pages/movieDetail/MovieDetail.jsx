import styled from 'styled-components';
import Banner from '../../components/features/movieDetail/Banner';
import CastAndCrew from '../../components/features/movieDetail/CastAndCrew';
import Content from '../../components/features/movieDetail/Content';
import MovieComment from '../../components/features/movieDetail/MovieComment';

function MovieDetail() {
  return (
    <>
      <PageWrapper>
        <Banner />
        <Content />
      </PageWrapper>
      <CastAndCrew />

        <MovieComment />

    </>
  );
}

export default MovieDetail;

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.color.commentColor};
  width: 100%;
  height: 100%;
`;

const CommentSection = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 682px;
  margin: 0 300px;
`;
