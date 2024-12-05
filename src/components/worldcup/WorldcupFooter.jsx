import styled from "styled-components";

const WorldcupFooter = () => {
  const footerText = "당신의 영화 취향을 찾고있어요!";

  return <Footer>{footerText}</Footer>;
};

export default WorldcupFooter;

const Footer = styled.footer`
  text-align: center;
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1rem;
  font-weight: ${(props) => props.theme.font.fontWeightMedium};
  background-color: ${(props) => props.theme.color.commentColor};
  color: ${(props) => props.theme.color.fontPink};
  padding: 1rem 0 0 0;
`;
