import React from "react";
import { RatingPageContainer } from "../../../styles/rating/rating";
import MovieRatingList from "../../../components/Rating/MovieRatingList";
import useRatingsStore from "../../../store/rating/useRatingsStore";
import ByRatingList from "../../../components/Rating/ByRatingList";

const MovieRatingsPage = () => {
  const { activeFilter } = useRatingsStore();

  return (
    <RatingPageContainer>
      {activeFilter === "전체" ? <MovieRatingList /> : <ByRatingList />}
    </RatingPageContainer>
  );
};

export default MovieRatingsPage;
