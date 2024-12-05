import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";

const GenreButton = ({ label, emoji }) => {
  const { selectedGenres, selectMultipleGenres } = useGenereStore();
  const isSelected = selectedGenres.includes(label);

  const handleClick = () => {
    selectMultipleGenres(label);
  };

  return (
    <S.GenreButton isSelected={isSelected} onClick={handleClick}>
      <span>{emoji}</span>
      <span>{label}</span>
    </S.GenreButton>
  );
};

export default GenreButton;

const S = {
  GenreButton: styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    height: 2.5rem;
    padding: 0 0.75rem;
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    cursor: pointer;

    border: 0.13rem solid
      ${(props) =>
        props.isSelected ? props.theme.color.genereBlueColor : props.theme.color.lineColor};
    border-radius: 0.63rem;
    background: ${(props) =>
      props.isSelected ? props.theme.color.genereChoiceColor : props.theme.color.mainColor};
    box-shadow: ${(props) =>
      props.isSelected
        ? "0 0.25rem 0.37rem rgba(33, 150, 243, 0.3)"
        : "0px 0.5rem 0.25rem rgba(0, 0, 0, 0.3)"};

    transition: all 0.3s ease;

    &:hover {
      box-shadow: ${(props) =>
        props.isSelected
          ? "0px 0.37rem 0.5rem rgba(33, 150, 243, 0.4)"
          : "0px 0.37rem 0.5rem rgba(0, 0, 0, 0.15)"};
      transform: translateY(-0.125rem);
    }

    &:active {
      transform: translateY(0);
    }
  `,
};
