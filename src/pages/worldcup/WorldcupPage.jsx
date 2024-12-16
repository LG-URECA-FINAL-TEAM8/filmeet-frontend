import { useCreateGame } from "../../apis/worldcup/queries";
import SvgClapperboard from "../../assets/svg/Clapperboard";
import GameStartButton from "../../components/worldcup/GameStartButton";
import RankButton from "../../components/worldcup/RankButton";
import WorldcupFooter from "../../components/worldcup/WorldcupFooter";
import WorldcupHeader from "../../components/worldcup/WorldcupHeader";
import WorldcupMatch from "../../components/worldcup/WorldcupMatch";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { ButtonContainer, PageWrapper, Subtitle, Title } from "../../styles/worldcup/worldcup";

const WorldcupPage = () => {

  const {
    isGameStarted,
    setGameStarted,
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

  return (
    <PageWrapper>
      {!isGameStarted ? (
        <ButtonContainer>
          <GameStartButton
            onClick={handleGameCreate}
            isLoading={createGameMutation.isLoading}
          />
        </ButtonContainer>
      ) : (
        <>
          <WorldcupHeader totalRounds={currentRound} />
          <WorldcupMatch />
          <WorldcupFooter />
        </>
      )}
    </PageWrapper>
  );
};

export default WorldcupPage;
