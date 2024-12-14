import { useCreateGame } from "../../apis/worldcup/queries";
import GameStartButton from "../../components/worldcup/GameStartButton";
import WorldcupFooter from "../../components/worldcup/WorldcupFooter";
import WorldcupHeader from "../../components/worldcup/WorldcupHeader";
import WorldcupMatch from "../../components/worldcup/WorldcupMatch";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { PageWrapper } from "../../styles/worldcup/worldcup";

const WorldcupPage = () => {
  const { isGameStarted, setGameStarted, setLoading } = useWorldcupStore();
  const createGameMutation = useCreateGame();

  const handleGameCreate = () => {
    console.log("게임 생성 요청 시작");
    setLoading(true); // 로딩 상태 활성화

    createGameMutation.mutate(
      { title: "2024 인기 영화 이상형 월드컵", totalRounds: 16 },
      {
        onSuccess: () => {
          console.log("게임 생성 성공");
          setGameStarted(); // 게임 시작
          setLoading(false); // 로딩 종료
        },
        onError: (error) => {
          console.error("게임 생성 실패:", error.message || error);
          setLoading(false); // 로딩 종료
        },
      }
    );
  };

  console.log("현재 게임 시작 상태:", isGameStarted);

  return (
    <PageWrapper>
      {!isGameStarted ? (
        <GameStartButton
          onClick={handleGameCreate}
          isLoading={createGameMutation.isLoading}
        />
      ) : (
        <>
          <WorldcupHeader totalRounds={16} />
          <WorldcupMatch />
          <WorldcupFooter />
        </>
      )}
    </PageWrapper>
  );
};

export default WorldcupPage;

