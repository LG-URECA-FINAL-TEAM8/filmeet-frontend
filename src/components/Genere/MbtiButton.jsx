import styled from "styled-components";
import { useGenereStore } from "../../store/genere/useGenereStore";

// Styled Button Component
const StyledMbtiButton = styled.button`
  width: 150px;
  height: 45px;
  border: 2px solid ${(props) => (props.isSelected ? "#2196f3" : "#ddd")};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  background: ${(props) => (props.isSelected ? "#e3f2fd" : "#fff")};
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 4px 6px rgba(33, 150, 243, 0.3)"
      : "0px 8px 6px rgba(0, 0, 0, 0.3)"};
  transition: box-shadow 0.3s ease, transform 0.2s ease, background 0.3s ease;

  &:hover {
    background: ${(props) => (props.isSelected ? "#bbdefb" : "#e6e6e6")};
    box-shadow: ${(props) =>
      props.isSelected
        ? "0px 6px 8px rgba(33, 150, 243, 0.4)"
        : "0px 6px 8px rgba(0, 0, 0, 0.15)"};
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: ${(props) =>
      props.isSelected
        ? "0px 3px 5px rgba(33, 150, 243, 0.5)"
        : "0px 3px 5px rgba(0, 0, 0, 0.2)"};
    transform: translateY(0);
  }

  span:first-child {
    font-size: 1.2rem;
    line-height: 1;
  }
`;

// Functional Component
const MbtiButton = ({ label, emoji }) => {
    const { selectedMbti, selectMbti } = useGenereStore();
    const isSelected = selectedMbti === label;
  
    const handleClick = () => {
      selectMbti(label);
    };
  
    return (
      <StyledMbtiButton isSelected={isSelected} onClick={handleClick}>
        <span>{emoji}</span>
        <span>{label}</span>
      </StyledMbtiButton>
    );
  };

export default MbtiButton;
