import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TopContainer, BottomContainer, BackButton, TopTitle, Label, Count } from "../../styles/rating/rating";
import { movies } from "../../data/movies";

const Profiles = {
  title: "평가",
  categories: [
    {
      label: "영화",
      count: movies.filter(movie => movie.rating).length,
    },
  ],
};

const Rating = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/mypage/contents/movies/ratings");
  };

  const handleBackClick = () => {
    navigate('/mypage');
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>{Profiles.title}</TopTitle>
      </TopContainer>

      {Profiles.categories.map((category, index) => (
        <BottomContainer key={index} onClick={() => handleCategoryClick(category.path)}>
          <Label>{category.label}</Label>
          <Count>{category.count}</Count>
        </BottomContainer>
      ))}
    </>
  );
};

export default Rating;
