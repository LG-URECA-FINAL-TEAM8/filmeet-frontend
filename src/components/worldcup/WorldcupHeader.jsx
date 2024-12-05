import styled from "styled-components";

const WorldcupHeader = ({ currentRound }) => {
  return (
    <HeaderContainer>
      <Title>시네마 월드컵</Title>
      <Subtitle>무슨 영화가 더 끌리는지 선택해주세요!!</Subtitle>
      <RoundIndicator>{currentRound}강</RoundIndicator>
    </HeaderContainer>
  );
};

export default WorldcupHeader;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.commentColor};
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.color.fontBlack};
  margin: 0.5rem 0;
`;

const Subtitle = styled.p`
  font-family: ${(props) => props.theme.font.fontSuitRegular};
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.fontGray};
  margin: 0.5rem 0;
`;

const RoundIndicator = styled.div`
  font-family: ${(props) => props.theme.font.fontSuitBold};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

