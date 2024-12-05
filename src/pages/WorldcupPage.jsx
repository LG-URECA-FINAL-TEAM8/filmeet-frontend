import WorldcupFooter from "../components/worldcup/WorldcupFooter";
import WorldcupHeader from "../components/worldcup/WorldcupHeader";
import WorldcupMatch from "../components/worldcup/WorldcupMatch";
import { PageWrapper } from "../styles/worldcup/worldcup";

const WorldcupPage = () => {
  const currentRound = 16;

  return (
    <PageWrapper>
      <WorldcupHeader currentRound={currentRound} />
      <WorldcupMatch />
      <WorldcupFooter />
    </PageWrapper>
  );
};

export default WorldcupPage;
