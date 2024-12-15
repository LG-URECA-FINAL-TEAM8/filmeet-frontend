import { useEffect } from "react";
import { useCreateGame } from "../../apis/worldcup/queries";
import GameStartButton from "../../components/worldcup/GameStartButton";
import WorldcupFooter from "../../components/worldcup/WorldcupFooter";
import WorldcupHeader from "../../components/worldcup/WorldcupHeader";
import WorldcupMatch from "../../components/worldcup/WorldcupMatch";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { PageWrapper } from "../../styles/worldcup/worldcup";

const WorldcupPage = () => {
  const {
    isGameStarted,
    setGameStarted,
    isLoading,
    setLoading,
    gameId,
    setGameId,
    currentRound,
    setCurrentRound,
    currentMatches,
    setCurrentMatches,
    isGameFinished,
    setIsGameFinished,
    winner,
    setWinner,
  } = useWorldcupStore();

  const createGameMutation = useCreateGame();

  const handleGameCreate = () => {
    setLoading(true);
    createGameMutation.mutate(
      { title: "2024 인기 영화 이상형 월드컵", totalRounds: 16 },
      {
        onSuccess: (response) => {
          setGameId(response.data);
          setGameStarted();
          setLoading(false);
        },
        onError: (error) => {
          setLoading(false);
        },
      }
    );
  };

  const handleNextRound = (nextRoundMatches) => {
    if (nextRoundMatches.length === 1) {
      setIsGameFinished(true);
      setWinner(nextRoundMatches[0].movie1);
      return;
    }
    setCurrentRound(currentRound / 2);
    setCurrentMatches(nextRoundMatches);
  };

  useEffect(() => {
    if (!isGameStarted) {
      setCurrentRound(16);
      setCurrentMatches([]);
      setWinner(null);
      setIsGameFinished(false);
    }
  }, [isGameStarted, setCurrentRound, setCurrentMatches, setWinner, setIsGameFinished]);

  return (
    <PageWrapper>
      {!isGameStarted ? (
        <GameStartButton
          onClick={handleGameCreate}
          isLoading={isLoading || createGameMutation.isLoading}
        />
      ) : isGameFinished ? (
        <div>
          <h2>우승자가 결정되었습니다!</h2>
          <div>🎉 우승 영화: {winner?.title || "알 수 없음"} 🎉</div>
        </div>
      ) : (
        <>
          <WorldcupHeader totalRounds={currentRound === 2 ? "결승" : `${currentRound}`} />
          <WorldcupMatch onNextRound={handleNextRound} />
          <WorldcupFooter />
        </>
      )}
    </PageWrapper>
  );
};

export default WorldcupPage;
