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
      <SvgClapperboard width="6rem" height="6rem" />
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

  TextContainer: styled.div`
    display: flex;
    flex-direction: column; /* 텍스트 수직 정렬 */
    align-items: center; /* 가운데 정렬 */
    justify-content: center; /* 상하 정렬 */
    margin-top: 2rem;
  `,

  RoundText: styled.p`
    font-family: ${(props) => props.theme.font.fontSuitBold};
    font-size: 2rem;
    color: ${(props) => props.theme.color.fontGray};
    margin: 0 0 0.5rem 0;
  `,

  SubText: styled.p`
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.fontDark};
    margin: 0;
    line-height: 1.6; /* 줄 간격 일정하게 */
    text-align: center; /* 텍스트 가운데 정렬 */
    font-family: ${(props) => props.theme.font.fontSuitRegular};
  `,

  Highlight: styled.span`
    color: ${(props) => props.theme.color.fontPink};
    font-weight: bold;
    font-family: ${(props) => props.theme.font.fontSuitBold};
  `,

  IconWrapper: styled.div`
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
    margin-top: 3rem; /* 버튼 그룹 위 여백 */
  `,

  Button: styled.button`
    width: 9rem;
    padding: 1rem 1rem;
    font-size: 1.5rem;
    background-color: ${(props) =>
      props.isLoading ? "#ccc" : props.theme.color.fontPink};
    color: #fff;
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