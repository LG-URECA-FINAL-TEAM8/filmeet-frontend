import WorldcupFooter from "../../components/worldcup/WorldcupFooter";
import WorldcupHeader from "../../components/worldcup/WorldcupHeader";
import WorldcupMatch from "../../components/worldcup/WorldcupMatch";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { PageWrapper } from "../../styles/worldcup/worldcup";

const WorldcupPage = () => {
  const { currentRound } = useWorldcupStore();

  return (
    <PageWrapper>
      <>
        <WorldcupHeader totalRounds={currentRound} />
        <WorldcupMatch />
        <WorldcupFooter />
      </>
    </PageWrapper>
  );
};

export default WorldcupPage;
