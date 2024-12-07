import Banner from '../../components/features/movieDetail/Banner';
import Content from '../../components/features/movieDetail/Content';
import styled from 'styled-components';

function MovieDetail() {
  return (
    <PageWrapper>
      <Banner />
      <Content />
    </PageWrapper>
  );
}

export default MovieDetail;

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.color.commentColor};
  width: 100%;
`;
