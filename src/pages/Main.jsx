import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/Common/poster/Poster';
import HotFeed from '../components/Features/comments/HotFeed';
import { movies } from '../data/movies';

const UpComingMovies = async () => {
  const response = await fetch(
    'http://filmeet-alb-1547575166.ap-northeast-2.elb.amazonaws.com/movies/upcoming'
  );
  if (!response.ok) {
    throw new Error('Movies data fetching failed');
  }
  return response.json();
};

function Main() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['upcoming'],
    queryFn: UpComingMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const UpcomingData = data.data.content || [];

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
    { title: '지금 뜨는 코멘트', component: <HotFeed /> },
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
