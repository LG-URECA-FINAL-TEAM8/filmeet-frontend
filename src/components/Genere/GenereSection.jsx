import React from "react";
import { genreOptions } from "../../data/generedata";
import GenreButton from "./GenereButton";
import styled from "styled-components";

const GenereSectionContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const GenreSection = () => {
  return (
    <GenereSectionContainer>
      <h2>어떤 영화 장르를 좋아하나요?</h2>
      <ButtonGroupContainer>
        {genreOptions.map((option, index) => (
          <GenreButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </GenereSectionContainer>
  );
};

export default GenreSection;
