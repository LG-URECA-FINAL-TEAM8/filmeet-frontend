import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { groupMovies } from '../../../utils/poster/posterGroup';

function Poster({ caseType = 0, movies = { movies } }) {
  const movieGroups = groupMovies(movies, 5);

  if (caseType == 1) {
    return (
      <S.CarouselContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          centerMode={false}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <S.NavButton className="prev" onClick={clickHandler}>
                <ChevronLeft color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <S.NavButton className="next" onClick={clickHandler}>
                <ChevronRight color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }>
          {movieGroups.map((group, groupIndex) => (
            <S.SlideContainer key={groupIndex}>
              {group.map((movie) => (
                <S.PostItem key={movie.id}>
                  <S.PostCardImg src={movie.image} alt={movie.title} />
                  <S.PostTitle>{movie.title}</S.PostTitle>
                  <S.GrayField>{movie.rating}</S.GrayField>
                </S.PostItem>
              ))}
            </S.SlideContainer>
          ))}
        </Carousel>
      </S.CarouselContainer>
    );
  }
  //case 2 개봉예정일
  if (caseType == 2) {
    return (
      <S.CarouselContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          centerMode={false}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <S.NavButton className="prev" onClick={clickHandler}>
                <ChevronLeft color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <S.NavButton className="next" onClick={clickHandler}>
                <ChevronRight color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }>
          {movieGroups.map((group, groupIndex) => (
            <S.SlideContainer key={groupIndex}>
              {group.map((movie) => (
                <S.PostItem key={movie.movieId}>
                  <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
                  <S.PostTitle>{movie.title}</S.PostTitle>
                  <S.PinkField>{`개봉일정 ${movie.releaseDate}`}</S.PinkField>
                </S.PostItem>
              ))}
            </S.SlideContainer>
          ))}
        </Carousel>
      </S.CarouselContainer>
    );
  }
  //case : 3 누적관객
  if (caseType == 3) {
    return (
      <S.CarouselContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={false}
          centerMode={false}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) =>
            hasPrev && (
              <S.NavButton className="prev" onClick={clickHandler}>
                <ChevronLeft color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }
          renderArrowNext={(clickHandler, hasNext) =>
            hasNext && (
              <S.NavButton className="next" onClick={clickHandler}>
                <ChevronRight color={lightTheme.fontGray} />
              </S.NavButton>
            )
          }>
          {movieGroups.map((group, groupIndex) => (
            <S.SlideContainer key={groupIndex}>
              {group.map((movie) => {
                const formattedAudience = `${Math.floor(movie.totalAudience / 10000)}만 명`;
                return (
                  <S.PostItem key={movie.id}>
                    <S.PostCardImg src={movie.image} alt={movie.title} />
                    <S.PostTitle>{movie.title}</S.PostTitle>
                    <S.GrayField>{`누적 관객 ${formattedAudience}`}</S.GrayField>
                  </S.PostItem>
                );
              })}
            </S.SlideContainer>
          ))}
        </Carousel>
      </S.CarouselContainer>
    );
  }

  //case 4 마이페이지
  if (caseType == 4) {
    return (
      <S.SlideContainer>
        {movies.map((movie) => (
          <S.PostItem key={movie.id}>
            <S.PostCardImg src={movie.image} alt={movie.title} />
            <S.PostTitle>{movie.title}</S.PostTitle>
            <S.PinkField>{`평가함 ★ ${movie.rating}`}</S.PinkField>
          </S.PostItem>
        ))}
      </S.SlideContainer>
    );
  }
  //case 5 이미지
  if (caseType == 5) {
    return (
      <S.SlideContainer>
        {movies.map((movie) => (
          <S.PostItem key={movie.id}>
            <S.PostCardImg src={movie.image} alt={movie.title} />
          </S.PostItem>
        ))}
      </S.SlideContainer>
    );
  }

  return (
    <S.SlideContainer>
      {movies.map((movie) => (
        <S.PostItem key={movie.id}>
          <S.PostCardImg src={movie.image} alt={movie.title} />
          <S.PostTitle>{movie.title}</S.PostTitle>
        </S.PostItem>
      ))}
    </S.SlideContainer>
  );
}

const S = {
  CarouselContainer: styled.div`
    width: calc(5 * (20% - 1rem) + 4rem);
    height: auto;
    position: relative;
    overflow: visible;

    .carousel.carousel-slider {
      height: 100%;
      overflow: visible;
    }

    .carousel .slide {
      background: transparent;
      height: auto;
      overflow: visible;
    }
  `,

  NavButton: styled.button`
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: ${lightTheme.defaulBoxShadow};
    z-index: 2;
    transition: all 0.2s ease;

    &:hover {
      background: white;
      box-shadow: ${lightTheme.defaulBoxShadow};
    }

    &.prev {
      left: -0.8rem;
    }

    &.next {
      right: 0rem;
    }

    svg {
      width: 1rem;
      height: 1rem;
    }
  `,

  PostCardImg: styled.img`
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    object-fit: cover;
    aspect-ratio: 2/3;
  `,
  PostTitle: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${lightTheme.fontBlack};
    font-size: 1rem;
    font-weight: ${lightTheme.fontWeightMedium};
    font-family: ${lightTheme.fontSuitRegular};
  `,

  PinkField: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${lightTheme.fontPink};
    font-size: 0.9rem;
    font-weight: ${lightTheme.fontWeightRegular};
    font-family: ${lightTheme.fontSuitRegular};
  `,

  GrayField: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${lightTheme.fontGray};
    font-size: 0.9rem;
    font-weight: ${lightTheme.fontWeightRegular};
    font-family: ${lightTheme.fontSuitRegular};
  `,

  PostItem: styled.div`
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 0 0.5rem;
    flex: 0 0 calc(20% - 1rem);
    max-width: calc(20% - 1rem);
  `,
  SlideContainer: styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
  `,
};

export default Poster;
