import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";

const AgeButton = ({ label, emoji }) => {
  const { selectedAge, selectAge } = useGenereStore();
  const isSelected = selectedAge === label;

  const handleClick = () => {
    selectAge(label);
  };

  return (
    <S.AgeButton isSelected={isSelected} onClick={handleClick}>
      <span>{emoji}</span>
      <span>{label}</span>
    </S.AgeButton>
  );
};

export default AgeButton;

const S = {
  AgeButton: styled.button`
    padding: 0 1.25rem;
    height: 2.5rem;
    border: 0.13rem solid ${(props) => (props.isSelected ? props.theme.color.genereBlueColor : props.theme.color.lineColor)};
    border-radius: 0.7rem;
    background: ${(props) => (props.isSelected ? props.theme.color.genereChoiceColor : props.theme.color.mainColor)};
    box-shadow: ${(props) =>
      props.isSelected
        ? "0rem 0.25rem 0.375rem rgba(33, 150, 243, 0.3)"
        : "0rem 0.5rem 0.375rem rgba(0, 0, 0, 0.3)"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.2s ease, background 0.3s ease;

    &:hover {
      background: ${(props) => (props.isSelected ? props.theme.color.generehoverColor : props.theme.color.commentColor)};
      box-shadow: ${(props) =>
        props.isSelected
          ? "0rem 0.375rem 0.5rem rgba(33, 150, 243, 0.4)"
          : "0rem 0.375rem 0.5rem rgba(0, 0, 0, 0.15)"};
      transform: translateY(-0.13rem);
    }

    &:active {
      box-shadow: ${(props) =>
        props.isSelected
          ? "0rem 0.1875rem 0.3125rem rgba(33, 150, 243, 0.5)"
          : "0rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)"};
      transform: translateY(0);
    }

    span:first-child {
      font-size: 1.2rem;
      line-height: 1;
    }
  `,
};