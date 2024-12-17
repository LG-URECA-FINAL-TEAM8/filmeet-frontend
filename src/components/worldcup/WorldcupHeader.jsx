import styled from "styled-components";

const WorldcupHeader = ({ totalRounds, subtitle = "선호하는 영화를 선택해주세요", round = "강" }) => {
  const roundText = totalRounds === 2 ? "결승" : `${totalRounds}${round}`;

  return (
    <S.HeaderContainer>
      <S.Title>{roundText}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.HeaderContainer>
  );
};

export default WorldcupHeader;

const S = {
  HeaderContainer: styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.color.commentColor};
  `,

  Title: styled.h1`
    margin: 0.5rem 0;
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontBlack};
  `,

  Subtitle: styled.p`
    margin: 0.5rem 0;
    font-size: 1rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontGray};
  `,

  RoundIndicator: styled.div`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,
};
