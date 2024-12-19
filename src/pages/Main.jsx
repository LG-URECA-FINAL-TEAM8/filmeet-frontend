import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import {
  useBoxOffice,
  useRandomGenre,
  useRecommendation,
  useTopTen,
  useUpcoming,
  useAdminRank,
} from '../apis/getMovies/queries';
import { useHotReview } from '../apis/reviews/queries';
import Footer from '../components/common/footer/Footer';
import Poster from '../components/common/poster/Poster';
import HotFeed from '../components/features/comments/HotFeed';
import Title from '../components/features/main/title/Title';
import useUserStore from '../store/user/userStore';
import carouselSlides from '../data/carouselMovie.js';
import {
  Content,
  GradientOverlay,
  MainBody,
  MovieTitle,
  SlideContainer,
  StyledCarouselContainer,
  StyledCarouselImage,
  Subtitle,
  TextOverlay,
} from '../styles/main/main.js';
import Loading from '../components/common/loading/Loading.jsx';
import { Helmet } from 'react-helmet';

function Main() {
  const userId = useUserStore((state) => state.userInfo?.id);
  const { data: upComing, isLoading: loadingUpComing } = useUpcoming();
  const { data: boxOffice, isLoading: loadingBoxOffice } = useBoxOffice();
  const { data: TopTen, isLoading: loadingTopTen } = useTopTen();
  const { data: HotReview, isLoading: loadingHotReview } = useHotReview();
  const { data: Recommended, isLoading: loadingRecommended } = useRecommendation(userId);
  const { data: RandomGenre, isLoading: loadingRandomGenre } = useRandomGenre();
  const { data: AdminMovie, isLoading: loadingAdminRank } = useAdminRank();
  const AdminMovieData = AdminMovie?.data || [];
  const isLoading =
    loadingUpComing ||
    loadingBoxOffice ||
    loadingTopTen ||
    loadingHotReview ||
    loadingRecommended ||
    loadingRandomGenre ||
    loadingAdminRank;

  const movieSections = [
    userId
      ? {
          title: '개인 추천 영화',
          component: <Poster caseType={1} movies={Recommended?.data || []} />,
        }
      : {
          title: '랜덤 장르 영화',
          component: <Poster caseType={1} movies={RandomGenre?.data?.content || []} />,
        },
    { title: '필밋 TOP 10', component: <Poster caseType={1} movies={TopTen?.data || []} /> },
    {
      title: '공개 예정작',
      component: <Poster caseType={2} movies={upComing?.data?.content || []} />,
    },
    { title: '박스오피스 순위', component: <Poster caseType={3} movies={boxOffice?.data || []} /> },
    {
      title: '관리자 추천 영화',
      component: <Poster caseType={1} movies={AdminMovieData} />,
    },
    { title: '지금 뜨는 코멘트', component: <HotFeed reviews={HotReview?.data?.content || []} /> },
  ];

  return (
    <MainBody>
      <Helmet>
        <meta
          name="페이지 설명"
          content="박스오피스, TOP10 영화와 같이 영화 정보를 확인할 수 있는 페이지입니다."
        />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledCarouselContainer>
            <Carousel autoplay autoplaySpeed={5000} speed={1000}>
              {carouselSlides.map((slide, index) => (
                <SlideContainer key={index}>
                  <GradientOverlay />
                  <StyledCarouselImage src={slide.image} alt={`carousel-${index}`} />
                  <TextOverlay>
                    <MovieTitle>{slide.title}</MovieTitle>
                    <Subtitle>{slide.subtitle}</Subtitle>
                    <Content>{slide.content}</Content>
                  </TextOverlay>
                </SlideContainer>
              ))}
            </Carousel>
          </StyledCarouselContainer>
          {movieSections.map(({ title, component }, index) => (
            <React.Fragment key={index}>
              <Title>{title}</Title>
              {component}
            </React.Fragment>
          ))}
          <Footer />
        </>
      )}
    </MainBody>
  );
}

export default Main;
