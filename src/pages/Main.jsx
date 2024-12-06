import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/Common/poster/Poster';
import HotFeed from '../components/features/comments/HotFeed';
import { movies } from '../data/movies';
import { useUpcoming } from '../apis/getMovies/queries';

function Main() {
  const { result } = useUpcoming();
  const UpcomingData = result?.data?.content || [];

  const movieSections = [
    {
      title: '개인 추천 영화',
      component: <Poster caseType={1} movies={movies} />,
    },
    {
      title: '필밋 TOP 10',
      component: <Poster caseType={1} movies={movies} />,
    },
    {
      title: '공개 예정작',
      component: <Poster caseType={2} movies={UpcomingData} />,
    },
    {
      title: '박스오피스 순위',
      component: <Poster caseType={3} movies={movies} />,
    },
    {
      title: '지금 뜨는 코멘트',
      component: <HotFeed />,
    },
  ];

  return (
    <MainBody>
      {movieSections.map(({ title, component }, index) => (
        <React.Fragment key={index}>
          <Title>{title}</Title>
          {component}
        </React.Fragment>
      ))}
    </MainBody>
  );
}

export default Main;
