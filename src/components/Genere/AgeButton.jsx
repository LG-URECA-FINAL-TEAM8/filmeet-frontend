import React from "react";
import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";


const StyledAgeButton = styled.button`
  padding: 0 20px; /* 양옆 패딩 */
  height: 40px; /* 고정된 높이 */
  border: 2px solid ${(props) => (props.isSelected ? "#2196f3" : "#ddd")}; /* 선택 시 파란색 테두리 */
  border-radius: 10px; /* 둥근 모서리 */
  cursor: pointer; /* 마우스 포인터 */
  font-size: 1rem; /* 글자 크기 */
  display: flex;
  align-items: center; /* 텍스트와 아이콘 수직 중앙 정렬 */
  justify-content: center; /* 텍스트와 아이콘 수평 중앙 정렬 */
  gap: 8px; /* 텍스트와 아이콘 간 간격 */
  background: ${(props) => (props.isSelected ? "#e3f2fd" : "#fff")}; /* 선택 시 연한 파란 배경 */
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 4px 6px rgba(33, 150, 243, 0.3)"
      : "0px 8px 6px rgba(0, 0, 0, 0.3)"}; /* 그림자 */
  transition: box-shadow 0.3s ease, transform 0.2s ease, background 0.3s ease;
  font-family: ${(props) => props.theme.font.fontSuitRegular};

  &:hover {
    background: ${(props) => (props.isSelected ? "#bbdefb" : "#e6e6e6")}; /* 호버 시 색상 변화 */
    box-shadow: ${(props) =>
      props.isSelected
        ? "0px 6px 8px rgba(33, 150, 243, 0.4)"
        : "0px 6px 8px rgba(0, 0, 0, 0.15)"}; /* 호버 시 그림자 강화 */
    transform: translateY(-2px); /* 살짝 올라가는 효과 */
  }

  &:active {
    box-shadow: ${(props) =>
      props.isSelected
        ? "0px 3px 5px rgba(33, 150, 243, 0.5)"
        : "0px 3px 5px rgba(0, 0, 0, 0.2)"}; /* 클릭 시 그림자 */
    transform: translateY(0); /* 클릭 시 원래 위치 */
  }

  span:first-child {
    font-size: 1.2rem; /* 아이콘 크기 */
    line-height: 1;
  }
`;

const AgeButton = ({ label, emoji }) => {
  const { selectedAge, selectAge } = useGenereStore();
  const isSelected = selectedAge === label;

  const handleClick = () => {
    selectAge(label);
  };

  return (
    <StyledAgeButton isSelected={isSelected} onClick={handleClick}>
      <span>{emoji}</span>
      <span>{label}</span>
    </StyledAgeButton>
  );
};

export default AgeButton;
