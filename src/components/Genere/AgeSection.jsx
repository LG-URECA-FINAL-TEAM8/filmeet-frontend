import React from "react";
import { ageOptions } from "../../data/generedata";
import AgeButton from "./AgeButton";
import styled from "styled-components";

// 섹션 컨테이너 스타일
const AgeSectionContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 320px; /* 섹션 높이 설정 */
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

// 버튼 그룹 컨테이너 스타일
const ButtonGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 버튼 그룹을 수평 중앙 정렬 */
  gap: 15px; /* 버튼 간 간격 */
  margin-top: 40px; /* 버튼 그룹을 아래로 내리기 */
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0 0 12px 0; 
  color: #333;
  text-align: left; /* 제목 왼쪽 정렬 */
  font-family: ${(props) => props.theme.font.fontSuitBold};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: left; /* 부제목 왼쪽 정렬 */
  margin: 0 0 20px 0; /* 부제목과 버튼 간 간격 */
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

// 컴포넌트 정의
const AgeSection = () => {
  return (
    <AgeSectionContainer>
      <Title>나이를 선택해주세요!</Title>
      <Subtitle>당신의 나이는?</Subtitle>
      <Label>나이</Label>
      <ButtonGroupContainer>
        {ageOptions.map((option, index) => (
          <AgeButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </AgeSectionContainer>
  );
};

export default AgeSection;
