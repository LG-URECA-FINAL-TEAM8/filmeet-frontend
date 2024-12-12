import React from 'react';
import { MainBody } from '../styles/main/main';
import Title from '../components/features/main/title/Title';
import Poster from '../components/Common/poster/Poster';
import HotFeed from '../components/features/comments/HotFeed';
import {
  useUpcoming,
  useBoxOffice,
  useTopTen,
  useRecommendation,
  useRandomGenre,
} from '../apis/getMovies/queries';
import { useHotReview } from '../apis/reviews/queries';
import useUserStore from '../store/user/userStore';

function Main() {
  const userId = useUserStore((state) => state.userInfo?.id);
  const { data: upComing } = useUpcoming();
  const { data: boxOffice } = useBoxOffice();
  const { data: TopTen } = useTopTen();
  const { data: HotReview } = useHotReview();
  const { data: Recommended } = useRecommendation(userId);
  const { data: RandomGenre } = useRandomGenre();
  const UpcomingData = upComing?.data?.content || [];
  const BoxOfficeData = boxOffice?.data || [];
  const RecommendedData = Recommended?.data || [];
  const TopTenData = TopTen?.data || [];
  const ReviewData = HotReview?.data?.content || [];
  const RandomGenreData = RandomGenre?.data?.content || [];

  const movieSections = [
    userId
      ? {
          title: '개인 추천 영화',
          component: <Poster caseType={1} movies={RecommendedData} />,
        }
      : {
          title: '랜덤 장르 영화',
          component: <Poster caseType={1} movies={RandomGenreData} />,
        },
    {
      title: '필밋 TOP 10',
      component: <Poster caseType={1} movies={TopTenData} />,
    },
    {
      title: '공개 예정작',
      component: <Poster caseType={2} movies={UpcomingData} />,
    },
    {
      title: '박스오피스 순위',
      component: <Poster caseType={3} movies={BoxOfficeData} />,
    },
    {
      title: '지금 뜨는 코멘트',
      component: <HotFeed reviews={ReviewData} />,
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
