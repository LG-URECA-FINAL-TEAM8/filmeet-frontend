import styled from "styled-components";

const GameStartButton = ({ onClick, isLoading }) => {
  return (
    <S.ButtonContainer>
      <S.Title>영화 월드컵</S.Title>
      <S.Subtitle>최고의 영화를 찾아보세요! 아래 버튼을 눌러 시작하세요.</S.Subtitle>
      <S.Button onClick={onClick} disabled={isLoading} isLoading={isLoading}>
        {isLoading ? "게임 생성 중..." : "게임 시작"}
      </S.Button>
    </S.ButtonContainer>
  );
};

export default GameStartButton;

const S = {
  ButtonContainer: styled.div`
    text-align: center;
    padding: 2rem;
  `,

  Title: styled.h1`
    font-size: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin-bottom: 1rem;
  `,

  Subtitle: styled.p`
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    color: ${(props) => props.theme.color.fontGray};
    margin-bottom: 2rem;
  `,

  Button: styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    background-color: ${(props) => (props.isLoading ? "#ccc" : props.theme.color.fontPink)};
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.isLoading ? "#ccc" : props.theme.color.generePinkColor};
    }
  `,
};
