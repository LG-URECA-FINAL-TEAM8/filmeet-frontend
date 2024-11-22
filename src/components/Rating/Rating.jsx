import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TopContainer, BottomContainer, BackButton, TopTitle, Label, Count } from "../../styles/rating/rating";

const Rating = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate('/mypage/contents/movies/ratings')
  };

  const handleBackClick = () => {
    navigate('/mypage')
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>평가</TopTitle>
      </TopContainer>

      <BottomContainer onClick={handleCategoryClick}>
        <Label>영화</Label>
        <Count>0</Count>
      </BottomContainer>
    </>
  );
};

export default Rating;
