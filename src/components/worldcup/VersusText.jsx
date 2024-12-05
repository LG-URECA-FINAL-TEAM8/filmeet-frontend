import styled from "styled-components";

const VersusText = ({ text = "VS" }) => {
  return <StyledVersusText>{text}</StyledVersusText>;
};

export default VersusText;

const StyledVersusText = styled.div`
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.font.fontSuitBold};
  align-self: center;
  margin: 0 120px 0 120px;
`;
