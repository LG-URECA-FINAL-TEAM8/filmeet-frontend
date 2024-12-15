import React from "react";
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
    gameId,
    setGameId,
    currentRound,
    setCurrentRound,
  } = useWorldcupStore();

  const createGameMutation = useCreateGame();

  // 게임 생성
  const handleGameCreate = () => {
    createGameMutation.mutate(
      { title: "2024 인기 영화 이상형 월드컵", totalRounds: 16 },
      {
        onSuccess: (response) => {
          setGameId(response.data);
          setGameStarted();
          setCurrentRound(16); // 초기 라운드 설정
        },
      }
    );
  };

  const handleGameFinish = () => {
    console.log("게임이 종료되었습니다.");
  };

  return (
    <PageWrapper>
      {!isGameStarted ? (
        <GameStartButton
          onClick={handleGameCreate}
          isLoading={createGameMutation.isLoading}
        />
      ) : (
        <>
          <WorldcupHeader totalRounds={currentRound} />
          <WorldcupMatch onGameFinish={handleGameFinish} />
          <WorldcupFooter />
        </>
      )}
    </PageWrapper>
  );
};

export default WorldcupPage;
