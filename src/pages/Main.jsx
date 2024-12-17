import React from 'react';
import {
  useBoxOffice,
  useRandomGenre,
  useRecommendation,
  useTopTen,
  useUpcoming,
} from '../apis/getMovies/queries';
import { useHotReview } from '../apis/reviews/queries';
import Footer from '../components/common/footer/Footer';
import Poster from "../components/common/poster/Poster";
import HotFeed from '../components/features/comments/HotFeed';
import Title from '../components/features/main/title/Title';
import useUserStore from '../store/user/userStore';
import { MainBody } from '../styles/main/main';
import { Carousel } from 'antd'; // Ant Design Carousel 추가
import 'antd/dist/reset.css';   // Ant Design 기본 스타일 적용

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

  // Carousel에 표시할 이미지 데이터
  const carouselImages = [
    '/assets/Kingdom.svg',
    '/assets/hidden.svg',
    '/assets/DP2.svg'
  ];

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
    <>
      <MainBody>
        {/* Carousel Section */}
        <Carousel autoplay>
          {carouselImages.map((image, index) => (
            <div key={index} style={{ position: 'relative' }}>
              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  left: 0,
                  top: 0,
                  zIndex: 2,
                  backgroundImage: 'linear-gradient(to right, #000 0%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 75%, #000 100%)',
                }}
              ></div>
              {/* Carousel Image */}
              <img
                src={image}
                alt={`carousel-${index}`}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* Movie Sections */}
        {movieSections.map(({ title, component }, index) => (
          <React.Fragment key={index}>
            <Title>{title}</Title>
            {component}
          </React.Fragment>
        ))}
        <Footer />
      </MainBody>
    </>
  );
}

export default Main;
