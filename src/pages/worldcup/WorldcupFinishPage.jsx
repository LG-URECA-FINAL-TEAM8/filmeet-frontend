import ResultCard from "../../components/worldcup/ResultCard";
import ResultFooter from "../../components/worldcup/ResultFooter";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { FinishPageWrapper, GameFinishTitle } from "../../styles/worldcup/worldcup";

const WorldcupFinishPage = () => {
  const { winnerMovie, gameId } = useWorldcupStore(); // 우승 영화 정보 가져오기

  // 우승 영화가 없을 경우 예외 처리
  if (!winnerMovie) {
    return
  }

  return (
    <FinishPageWrapper>
      {/* 우승 영화 카드 */}
      <GameFinishTitle>{winnerMovie.title}</GameFinishTitle>
      <ResultCard
        image={winnerMovie.posterUrl}
        title={winnerMovie.title}
        rating={winnerMovie.ratingCounts || 0}
        likes={winnerMovie.likeCounts || 0}
        comments={winnerMovie.commentCounts || 0}
        movieId={winnerMovie.movieId}
      />
      <ResultFooter gameId={gameId} />
    </FinishPageWrapper>
  );
};

export default WorldcupFinishPage;
