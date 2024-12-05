import styled from "styled-components";

const WorldcupHeader = ({ currentRound, title = "시네마 월드컵", subtitle = "무슨 영화가 더 끌리는지 선택해주세요!!", round = "강" }) => {
  return (
    <S.HeaderContainer>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.RoundIndicator>{currentRound}{round}</S.RoundIndicator>
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
    font-weight: bold;
    color: ${(props) => props.theme.color.fontBlack};
  `,

  Subtitle: styled.p`
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
  `,

  RoundIndicator: styled.div`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-weight: bold;
  `,
};
