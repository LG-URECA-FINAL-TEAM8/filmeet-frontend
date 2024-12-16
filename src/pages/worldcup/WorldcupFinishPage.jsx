import React from "react";
import ResultCard from "../../components/worldcup/ResultCard";
import ResultFooter from "../../components/worldcup/ResultFooter";
import { FinishPageWrapper } from "../../styles/worldcup/worldcup";
import useWorldcupStore from "../../store/worldcup/worldcupStore";

const WorldcupFinishPage = () => {
  const { winnerMovie, gameId } = useWorldcupStore(); // 우승 영화 정보 가져오기

  // 우승 영화가 없을 경우 예외 처리
  if (!winnerMovie) {
    return;
  }

  return (
    <FinishPageWrapper>
      {/* 우승 영화 카드 */}
      <h1>우승</h1>
      <ResultCard
        image={winnerMovie.posterUrl}
        title={winnerMovie.title}
        rating={winnerMovie.ratingCounts || 0}
        likes={winnerMovie.likeCounts || 0}
        comments={winnerMovie.commentCounts || 0}
      />
      <ResultFooter gameId={gameId} />
    </FinishPageWrapper>
  );
};

export default WorldcupFinishPage;
