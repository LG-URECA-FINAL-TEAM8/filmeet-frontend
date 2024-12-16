import styled from "styled-components";
import SvgClapperboard from "../../assets/svg/Clapperboard";

const GameStartButton = ({ onClick, isLoading }) => {
  return (
    <S.ButtonContainer>
      
      <S.Title>FILMEET<SvgClapperboard width="4rem" height="4rem"/></S.Title>
      <S.Subtitle>16강</S.Subtitle>
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
  `,

  Title: styled.h1`
    font-size: 5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin-bottom: 1rem;
  `,

  Subtitle: styled.p`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontGray};
    margin-bottom: 3rem;
  `,

  Button: styled.button`
    width: 15rem; /* 고정된 너비 */
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
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
