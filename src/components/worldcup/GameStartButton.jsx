import styled from "styled-components";
import SvgClapperboard from "../../assets/svg/Clapperboard";
import RankButton from "./RankButton";

const GameStartButton = ({ onClick, isLoading }) => {
  return (
<S.ButtonContainer>
  <S.Title>FILMEET</S.Title>
  <S.Subtitle>A WORLD CUP-STYLE GAME</S.Subtitle>
  <S.RoundContainer>
    <S.IconWrapper>
      <SvgClapperboard width="8rem" height="8rem" />
    </S.IconWrapper>
  </S.RoundContainer>
  <S.ButtonGroup>
    <S.Button onClick={onClick} disabled={isLoading} isLoading={isLoading}>
      {"게임 시작"}
    </S.Button>
    <RankButton />
  </S.ButtonGroup>
</S.ButtonContainer>

  );
};

export default GameStartButton;

const S = {
  ButtonContainer: styled.div`
    text-align: center;
  `,

  Title: styled.div`
    font-size: 5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    margin-bottom: 1rem;
  `,

  Subtitle: styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.fontDark};
    margin-top: 2rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  RoundContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem; /* 아이콘과 텍스트 사이 간격 */
  `,

  IconWrapper: styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ButtonGroup: styled.div`
    display: flex;
    flex-direction: row; /* 버튼을 가로로 배치 */
    justify-content: center; /* 버튼을 가운데 정렬 */
    align-items: center;
    gap: 2rem; /* 버튼 사이 간격 설정 */
    margin-top: 5rem; /* 버튼 그룹 위 여백 */
  `,

  Button: styled.button`
    width: 9rem;
    padding: 1rem 1rem;
    font-family: ${(props) => props.theme.font.fontSuitRegular};
    font-size: 1.5rem;
    background-color: ${(props) =>
      props.isLoading ? "#ccc" : props.theme.color.fontPink};
    color: ${(props) => props.theme.color.fontWhite};
    border: none;
    border-radius: 0.7rem;
    cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) =>
        props.isLoading ? "#ccc" : props.theme.color.generePinkColor};
    }
  `,
};