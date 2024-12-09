import styled from 'styled-components';
import { useGenereStore } from '../../store/genere/useGenereStore';

const MbtiButton = ({ label, emoji }) => {
  const { selectedMbti, selectMbti } = useGenereStore();
  const isSelected = selectedMbti === label;

  const handleClick = () => {
    selectMbti(label);
  };

  return (
    <S.MbtiButton isSelected={isSelected} onClick={handleClick}>
      <span>{emoji}</span>
      <span>{label}</span>
    </S.MbtiButton>
  );
};

export default MbtiButton;

const S = {
  MbtiButton: styled.button`
    width: 9.375rem;
    height: 3rem;
    border: 0.125rem solid ${(props) => (props.isSelected ? '#2196f3' : '#ddd')};
    border-radius: 0.6rem;
    background: ${(props) => (props.isSelected ? '#e3f2fd' : '#fff')};
    box-shadow: ${(props) =>
      props.isSelected
        ? '0rem 0.25rem 0.37rem rgba(33, 150, 243, 0.3)'
        : '0rem 0.5rem 0.37rem rgba(0, 0, 0, 0.3)'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    cursor: pointer;
    transition:
      box-shadow 0.3s ease,
      transform 0.2s ease,
      background 0.3s ease;

    &:hover {
      background: ${(props) => (props.isSelected ? '#bbdefb' : '#e6e6e6')};
      box-shadow: ${(props) =>
        props.isSelected
          ? '0rem 0.37rem 0.5rem rgba(33, 150, 243, 0.4)'
          : '0rem 0.37rem 0.5rem rgba(0, 0, 0, 0.15)'};
      transform: translateY(-0.125rem);
    }

    &:active {
      box-shadow: ${(props) =>
        props.isSelected
          ? '0rem 0.18rem 0.31rem rgba(33, 150, 243, 0.5)'
          : '0rem 0.18rem 0.31rem rgba(0, 0, 0, 0.2)'};
      transform: translateY(0);
    }

    span:first-child {
      font-size: 1.2rem;
      line-height: 1;
    }
  `,
};
