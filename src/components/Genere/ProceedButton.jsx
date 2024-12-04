import React from "react";
import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";

const ProceedButton = styled.button`
  background-color: #ff007f;
  width: 240px;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-family: ${(props) => props.theme.font.fontSuitRegular};

  &:hover {
    background-color: #e6006e;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ProceedButtonContainer = styled.div`
  display: flex;
  justify-content: right; /* 버튼을 오른쪽 정렬 */
  margin-top: 20px;
  padding-right: px; /* 버튼을 살짝 왼쪽으로 이동 */
`;

const ProceedButtonComponent = () => {
  const { selectedMbti, selectedAge, selectedGenres } = useGenereStore();

  const handleProceed = () => {
    if (!selectedMbti || !selectedAge || selectedGenres.length === 0) {
      return;
    }

    const dataToSend = {
      mbti: selectedMbti,
      age: selectedAge,
      genres: selectedGenres,
    };

  };

  return (
    <ProceedButtonContainer>
      <ProceedButton onClick={handleProceed}>선택 완료</ProceedButton>
    </ProceedButtonContainer>
  );
};

export default ProceedButtonComponent;
