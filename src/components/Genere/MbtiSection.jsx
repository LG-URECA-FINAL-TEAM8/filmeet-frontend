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
  display: flex;
  flex-direction: column;
  margin: 0px auto;
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

const ButtonGroupContainer = styled.div`
  display: grid; /* 그리드 레이아웃 사용 */
  grid-template-columns: repeat(4, 1fr); /* 4열로 정렬 */
  gap: 15px; /* 버튼 간 간격 */
  justify-content: center; /* 버튼 그룹 중앙 정렬 */
  justify-items: center; /* 각 버튼 중앙 정렬 */
  width: 70%; /* 버튼 그룹의 너비 */
  margin: 0 auto; /* 그룹을 수평 중앙에 위치 */
`;
const Label = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 10px 0; /* 부제목 아래 간격 추가 */
  color: #333;
  text-align: left; /* 왼쪽 정렬 */
  font-family: ${(props) => props.theme.font.fontSuitRegular};
`;
const MbtiSection = () => {
  return (
    <MbtiSectionContainer>
      <Title>당신의 MBTI?</Title>
      <Subtitle>MBTI를 선택해 주세요</Subtitle>
      <Label>MBTI</Label>
      <ButtonGroupContainer>
        {mbtiOptions.map((option, index) => (
          <MbtiButton key={index} label={option.label} emoji={option.emoji} />
        ))}
      </ButtonGroupContainer>
    </MbtiSectionContainer>
  );
};

export default MbtiSection;
