import React from "react";
import { TopContainer, BackButton, TopTitle, MovieContainer, MovieItem, MovieImage, MovieTitle, MovieRating, MovieInfo, FilterContainer, FilterButton } from "../../styles/rating/rating"; // 스타일 컴포넌트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";

const MovieRatingList = () => {
  const { setActiveComponent, filteredMovies, activeFilter, setActiveFilter } = useRatingsStore();
  const navigate = useNavigate(); 
  const movies = filteredMovies();

  const handleBackClick = () => {
    navigate('/mypage/ratings')
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>평가한 작품들</TopTitle>
        <FilterContainer>
            <FilterButton isActive={activeFilter === "전체"} onClick={() => handleFilterClick("전체")}>
            전체
            </FilterButton>
            <FilterButton isActive={activeFilter === "별점 순"} onClick={() => handleFilterClick("별점 순")}>
            별점 순
            </FilterButton>
        </FilterContainer>
      </TopContainer>

      <MovieContainer>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieItem key={movie.id}>
              <MovieImage src={movie.image} alt={movie.title} />
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRating>평가함 ★ {movie.rating}</MovieRating>
              </MovieInfo>
            </MovieItem>
          ))
        ) : (
          <p>아직 평가하신 작품이 없어요.</p>
        )}
      </MovieContainer>
    </>
  );
};

export default MovieRatingList;
