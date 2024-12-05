import styled from "styled-components";

const VersusText = () => {
  const VSText = "VS"
  return <S.StyledVersusText>{VSText}</S.StyledVersusText>;
};

export default VersusText;

const S = {
  StyledVersusText: styled.div`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    align-self: center;
    margin: 0 7.5rem 0 7.5rem;
  `,
};
