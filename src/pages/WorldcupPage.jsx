import styled from "styled-components";
import WorldcupMoviecard from "../components/worldcup/WorldcupMoviecard";
import { worldcupData } from "../styles/worldcup/worldcup";
import VersusText from "../components/worldcup/VersusText";
import WorldcupHeader from "../components/worldcup/WorldcupHeader";
import WorldcupFooter from "../components/worldcup/WorldcupFooter";

const WorldcupPage = () => {
  const currentRound = 16; // 현재 라운드

  return (
    <PageWrapper>
      <WorldcupHeader currentRound={currentRound} />
      <MovieGrid>
        {worldcupData.slice(0, 2).map((movie, index) => (
          <>
            <WorldcupMoviecard
              key={movie.id}
              image={movie.image}
              title={movie.title}
              rating={movie.rating}
              audience={movie.audience}
              likes={movie.likes}
              comments={movie.comments}
            />
            {index === 0 && <VersusText />}
          </>
        ))}
      </MovieGrid>
      <WorldcupFooter />
    </PageWrapper>
  );
};

export default WorldcupPage;

const PageWrapper = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  height: auto;
  overflow: hidden;
`;

const MovieGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;
