import React from 'react';
import { BackButton, TopContainer, TopTitle } from '../../../styles/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';



const AllMoviesByRatingPage = () => { 
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/mypage/contents/movies/ratings')
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>평가한 작품들</TopTitle>
      </TopContainer>     
    </>
  );
};

export default AllMoviesByRatingPage;
