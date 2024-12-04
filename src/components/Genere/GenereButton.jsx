import React from "react";
import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";


const StyledGenreButton = styled.button`
  padding: 0 12px;
  height: 40px;
  border: 2px solid ${(props) => (props.isSelected ? "#2196f3" : "#EDEDED")};
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  background: ${(props) => (props.isSelected ? "#e3f2fd" : "#fff")};
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 4px 6px rgba(33, 150, 243, 0.3)"
      : "0px 8px 4px rgba(0, 0, 0, 0.3)"};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.isSelected
        ? "0px 6px 8px rgba(33, 150, 243, 0.4)"
        : "0px 6px 8px rgba(0, 0, 0, 0.15)"};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const GenreButton = ({ label, emoji }) => {
  const { selectedGenres, selectMultipleGenres } = useGenereStore();
  const isSelected = selectedGenres.includes(label);

  const handleClick = () => {
    selectMultipleGenres(label);
  };

  return (
    <StyledGenreButton isSelected={isSelected} onClick={handleClick}>
      <span>{emoji}</span>
      <span>{label}</span>
    </StyledGenreButton>
  );
};

export default GenreButton;
