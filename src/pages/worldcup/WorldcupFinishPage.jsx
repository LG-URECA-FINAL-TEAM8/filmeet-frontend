import ResultCard from "../../components/worldcup/ResultCard";
import ResultFooter from "../../components/worldcup/ResultFooter";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import styled from "styled-components";

const WorldcupFinishPage = () => {
  const { winnerMovie, gameId } = useWorldcupStore(); // 우승 영화 정보 가져오기

  // 우승 영화가 없을 경우 예외 처리
  if (!winnerMovie) {
    return null;
  }

  return (
    <S.WinnerPageWrapper>
      <S.CongratsText>🎉 축하합니다! 최고의 영화가 선정되었습니다 🎉</S.CongratsText>
      <S.WinnerTitle>{winnerMovie.title}</S.WinnerTitle>    
        <ResultCard
          image={winnerMovie.posterUrl}
          title={winnerMovie.title}
          rating={winnerMovie.ratingCounts || 0}
          likes={winnerMovie.likeCounts || 0}
          comments={winnerMovie.commentCounts || 0}
          movieId={winnerMovie.movieId}
        />
      <ResultFooter gameId={gameId} />
    </S.WinnerPageWrapper>
  );
};

export default WorldcupFinishPage;

const S = {
  WinnerPageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.color.fontWhite} 0%,
      ${(props) => props.theme.color.commentColor} 100%
    );
  `,

  CongratsText: styled.p`
    font-size: 1.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    color: ${(props) => props.theme.color.fontPink};
    margin-bottom: 1rem;
  `,

  WinnerTitle: styled.h1`
    font-size: 2.5rem;
    font-family: ${(props) => props.theme.font.fontSuitBold};
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  `,

  WinnerCardWrapper: styled.div`
    padding: 1rem;

    border-radius: 1rem;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.color.fontWhite};
    margin-bottom: 2rem;
  `,
};
