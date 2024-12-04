import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";

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

    // API 전송 또는 다음 단계 처리
  };

  return (
    <S.ProceedButtonContainer>
      <S.ProceedButton onClick={handleProceed}>선택 완료</S.ProceedButton>
    </S.ProceedButtonContainer>
  );
};

export default ProceedButtonComponent;

const S = {
  ProceedButton: styled.button`
    background-color: ${(props) => props.theme.color.generePinkColor};
    width: 15rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.32rem;
    padding: 0.63rem 1.25rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.38rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color:  ${(props) => props.theme.color.fontPink};
      box-shadow: 0 0.4rem 0.7rem rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.98);
    }
  `,
  ProceedButtonContainer: styled.div`
    display: flex;
    justify-content: right;
    margin-top: 1.25rem;
    padding-right: 0; 
  `,
};
