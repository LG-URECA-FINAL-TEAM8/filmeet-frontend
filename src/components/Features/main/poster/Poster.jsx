import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../../styles/themes';
import movies from '../../../../data/moives.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Poster() {
  const groupMovies = (movies, size) => {
    const groups = [];
    for (let i = 0; i < movies.length; i += size) {
      groups.push(movies.slice(i, i + size));
    }
    return groups;
  };

  const movieGroups = groupMovies(movies, 5);

  return (
    <CarouselContainer>
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
            <NavButton className="prev" onClick={clickHandler}>
              <ChevronLeft color={lightTheme.fontGray} />
            </NavButton>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <NavButton className="next" onClick={clickHandler}>
              <ChevronRight color={lightTheme.fontGray} />
            </NavButton>
          )
        }>
        {movieGroups.map((group, groupIndex) => (
          <SlideContainer key={groupIndex}>
            {group.map((movie) => (
              <PostItem key={movie.id}>
                <PostCardImg src={movie.image} alt={movie.title} />
                <PostTitle>{movie.title}</PostTitle>
              </PostItem>
            ))}
          </SlideContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
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
`;

const NavButton = styled.button`
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
`;

const PostCardImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  aspect-ratio: 2/3;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  width: 100%;
  color: ${lightTheme.fontBlack};
  font-size: 1rem;
  font-weight: ${lightTheme.fontWeightMedium};
  font-family: ${lightTheme.fontSuitRegular};
`;

const PostItem = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 0 0.5rem;
  flex: 0 0 calc(20% - 1rem);
  max-width: calc(20% - 1rem);
`;

const SlideContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
`;

export default Poster;
