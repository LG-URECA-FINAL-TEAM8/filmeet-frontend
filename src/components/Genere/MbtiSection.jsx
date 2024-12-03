import React from "react";
import { mbtiOptions } from "../../data/generedata";
import MbtiButton from "./MbtiButton";
import styled from "styled-components";

const MbtiSectionContainer = styled.div`
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

const MbtiSection = () => {
  return (
    <MbtiSectionContainer>
      <h2>당신의 MBTI는 무엇인가요?</h2>
      <ButtonGroupContainer>
        {mbtiOptions.map((option, index) => (
          <MbtiButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </MbtiSectionContainer>
  );
};

export default MbtiSection;