import styled from 'styled-components';

const SvgCircle = ({ isSelected }) => {
  return (
    <StyledSvg isSelected={isSelected}>
      <circle cx="12" cy="12" r="11" />
      {isSelected && (
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          ✓
        </text>
      )}
    </StyledSvg>
  );
};

export default SvgCircle;

const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  vertical-align: middle;

  circle {
    fill: ${(props) => (props.isSelected ? props.theme.color.fontPink : 'none')};
    stroke: ${(props) =>
      props.isSelected ? props.theme.color.fontPink : props.theme.color.collectionColor};
    stroke-width: 2;
  }
`;
