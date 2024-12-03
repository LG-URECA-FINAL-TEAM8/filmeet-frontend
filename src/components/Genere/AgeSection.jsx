import React from "react";
import { ageOptions } from "../../data/generedata";
import AgeButton from "./AgeButton";
import styled from "styled-components";

// 섹션 컨테이너 스타일
const AgeSectionContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
`;

// 버튼 그룹 컨테이너 스타일
const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

// 컴포넌트 정의
const AgeSection = () => {
  return (
    <AgeSectionContainer>
      <h2>나이를 선택해주세요!</h2>
      <ButtonGroupContainer>
        {ageOptions.map((option, index) => (
          <AgeButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </AgeSectionContainer>
  );
};

export default AgeSection;
