import React from "react";
import { TopContainer, BackButton, TopTitle, FilterContainer, FilterButton, MovieContainer } from "../../styles/rating/rating";
import Poster from '../../components/Common/poster/Poster';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";

const MovieRatingList = () => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const navigate = useNavigate(); 

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
        <Poster caseType={6} movies={movies} />      
    </>
  );
};

export default MovieRatingList;
