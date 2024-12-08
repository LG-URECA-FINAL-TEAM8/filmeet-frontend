import styled from "styled-components";
import { worldcupData } from "../../data/worldcup";
import VersusText from "./VersusText";
import WorldcupMoviecard from "./WorldcupMoviecard";

const WorldcupMatch = () => {
  return (
    <S.MovieGrid>
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
      </S.MovieGrid>
  );
};

export default WorldcupMatch;

const S = {
    MovieGrid: styled.div`
        display: flex;
        gap: 2rem;
        justify-content: center;
        flex-wrap: wrap;
    `,
}
