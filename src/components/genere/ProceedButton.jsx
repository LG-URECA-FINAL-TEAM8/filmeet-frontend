import styled from 'styled-components';
import { useGenereStore } from '../../store/genere/useGenereStore';
import { usePreference } from '../../apis/auth/queries';
import { useNavigate } from 'react-router-dom';
import { upDatePreference } from '../../utils/auth/updatePreference';
import useLoginStore from '../../store/auth/loginStore';

const ProceedButtonComponent = () => {
  const { selectedMbti, selectedAge, selectedGenres } = useGenereStore();
  const { mutate: preferenceMutate } = usePreference();
  const { isLoggedIn, setLoggedIn } = useLoginStore();
  const navigate = useNavigate();
  const handleProceed = () => {
    const preferenceData = {
      mbti: selectedMbti,
      age: selectedAge,
      genres: selectedGenres,
    };
    console.log(preferenceData);
    upDatePreference(preferenceData, preferenceMutate, navigate, isLoggedIn, setLoggedIn);
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
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    box-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    font-family: ${(props) => props.theme.font.fontSuitRegular};

    &:hover {
      background-color: ${(props) => props.theme.color.fontPink};
      box-shadow: 0 0.4rem 0.7rem rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: scale(0.9);
    }
  `,
  ProceedButtonContainer: styled.div`
    display: flex;
    justify-content: right;
    margin-top: 1.25rem;
    padding-right: 0;
  `,
};
