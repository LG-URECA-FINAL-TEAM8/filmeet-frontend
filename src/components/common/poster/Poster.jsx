import { useMemo } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { groupMovies } from '../../../utils/poster/posterGroup';
import { useNavigate } from 'react-router-dom';

function Poster({ caseType = 0, movies }) {
  const movieGroups = useMemo(() => groupMovies(movies, 5), [movies]);
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/moviedetail/${id}`);
  };

  const renderCarousel = (renderItem) => (
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
              <ChevronLeft color={'#7E7E7E'} />
            </S.NavButton>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <S.NavButton className="next" onClick={clickHandler}>
              <ChevronRight color={'#7E7E7E'} />
            </S.NavButton>
          )
        }>
        {movieGroups.map((group, groupIndex) => (
          <S.SlideContainer key={groupIndex}>{group.map(renderItem)}</S.SlideContainer>
        ))}
      </Carousel>
    </S.CarouselContainer>
  );

  const renderCases = {
    1: () =>
      renderCarousel((movie) => (
        <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie?.movieId)}>
          <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
          <S.PostTitle>{movie.title}</S.PostTitle>
          <S.GrayField>{movie.averageRating}</S.GrayField>
        </S.PostItem>
      )),

    2: () =>
      renderCarousel((movie) => (
        <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
          <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
          <S.PostTitle>{movie.title}</S.PostTitle>
          <S.PinkField>{`개봉일정 ${movie.releaseDate}`}</S.PinkField>
        </S.PostItem>
      )),

    3: () =>
      renderCarousel((movie) => {
        const formattedAudience = `${Math.floor((movie.totalAudience || 0) / 10000)}만 명`;
        return (
          <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
            <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
            <S.PostTitle>{movie.title}</S.PostTitle>
            <S.GrayField>{`누적 관객 ${formattedAudience}`}</S.GrayField>
          </S.PostItem>
        );
      }),

    4: () => (
      <S.SlideContainer>
        {movies.map((movie) => (
          <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
            <S.PostCardImg src={movie.posterImage} alt={movie.title} />
            <S.PostTitle>{movie.title}</S.PostTitle>
            <S.PinkField>{`평가함 ★ ${movie.ratingCounts}`}</S.PinkField>
          </S.PostItem>
        ))}
      </S.SlideContainer>
    ),

    5: () => (
      <S.SlideContainer>
        {movies.map((movie) => (
          <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
            <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
          </S.PostItem>
        ))}
      </S.SlideContainer>
    ),

    6: () => (
      <S.GridContainer>
        {movies.map((movie) => (
          <S.GridItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
            <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
            <S.PostTitle>{movie.title}</S.PostTitle>
            <S.PinkField>{`평가함 ★ ${movie.rating}`}</S.PinkField>
          </S.GridItem>
        ))}
      </S.GridContainer>
    ),

    7: () => (
      <S.GridContainer>
        {movies.map((movie) => (
          <S.GridItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
            <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
            <S.PostTitle>{movie.title}</S.PostTitle>
          </S.GridItem>
        ))}
      </S.GridContainer>
    ),
  };

  const defaultRender = () => (
    <>
      {movies.map((movie) => (
        <S.PostItem key={movie.movieId} onClick={() => handleMovieClick(movie.movieId)}>
          <S.PostCardImg src={movie.posterUrl} alt={movie.title} />
          <S.PostTitle>{movie.title}</S.PostTitle>
        </S.PostItem>
      ))}
    </>
  );

  return (renderCases[caseType] || defaultRender)();
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
    box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
    z-index: 2;
    transition: all 0.2s ease;

    &:hover {
      background: white;
      box-shadow: ${(props) => props.theme.box.defaulBoxShadow};
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
    image-rendering: smooth;
    aspect-ratio: 2/3;
  `,

  PostTitle: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${(props) => props.theme.color.fontBlack};
    font-size: 1rem;
    font-weight: ${(props) => props.theme.font.fontWeightMedium};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  PinkField: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${(props) => props.theme.color.fontPink};
    font-size: 0.9rem;
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  GrayField: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 0.5rem;
    width: 100%;
    color: ${(props) => props.theme.color.fontGray};
    font-size: 0.9rem;
    font-weight: ${(props) => props.theme.font.fontWeightRegular};
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  PostItem: styled.div`
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 0 0.5rem;
    flex: 0 0 calc(20% - 1rem);
  `,

  SlideContainer: styled.div`
    display: flex;
    gap: 1rem;
    height: 100%;
  `,

  GridContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
    margin: 0 auto;
    padding: 1rem;
  `,

  GridItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `,
};

export default Poster;
