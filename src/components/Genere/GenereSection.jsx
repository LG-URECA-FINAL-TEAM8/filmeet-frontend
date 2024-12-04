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
  margin: 0px auto;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 12px 0; 
  color: #333;
  text-align: left; 
  font-family: ${(props) => props.theme.font.fontSuitBold};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: left; /* 왼쪽 정렬 */
  margin: 0 0 20px 0; /* 부제목 아래 간격 추가 */
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const Label = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 10px 0; /* 부제목 아래 간격 추가 */
  color: #333;
  text-align: left; /* 왼쪽 정렬 */
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;

const GenreSection = () => {
  return (
    <GenereSectionContainer>
      <Title>어떤 영화 장르를 좋아하나요?</Title>
      <Subtitle>마음에 드는 장르를 최대 3개까지 골라주세요</Subtitle>
      <Label>장르</Label>
      <ButtonGroupContainer>
        {genreOptions.map((option, index) => (
          <GenreButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </GenereSectionContainer>
  );
};

export default GenreSection;
