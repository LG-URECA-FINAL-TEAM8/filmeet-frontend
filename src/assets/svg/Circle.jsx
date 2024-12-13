import styled from 'styled-components';

const SvgCircle = ({ isSelected, isDisabled }) => {
  return (
    <StyledSvg isSelected={isSelected} isDisabled={isDisabled}>
      <circle cx="12" cy="12" r="11" />
      {/* 체크 표시가 항상 렌더링되며, 색상은 상태에 따라 설정 */}
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="12"
        fontWeight="bold"
        fill={isDisabled ? '#FFFFFF' : '#FFFFFF'}
      >
        ✓
      </text>
    </StyledSvg>
  );
};

export default SvgCircle;

const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  vertical-align: middle;

  circle {
    fill: ${(props) =>
      props.isDisabled
        ? props.theme.color.collectionColor
        : props.isSelected
        ? props.theme.color.fontPink
        : 'none'};
    stroke: ${(props) =>
      props.isDisabled || props.isSelected
        ? props.theme.color.fontWhite // 비활성화 또는 선택된 상태는 흰색 외곽선
        : props.theme.color.collectionColor}; // 기본 외곽선
    stroke-width: 2;
  }

`;
