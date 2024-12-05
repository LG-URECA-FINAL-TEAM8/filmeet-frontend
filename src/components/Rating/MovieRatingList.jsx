import * as S from "../../styles/rating/rating";
import Poster from '../Common/poster/Poster';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import { pagecontents } from "../../data/pagecontents";
import { createBackClickHandler, createFilterClickHandler } from "../../utils/ratings/navigationHandlers";

const MovieRatingList = () => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const { title, filters } = pagecontents.movieRatingList;
  const navigate = useNavigate();

  const handleBackClick = createBackClickHandler(navigate, "/mypage/ratings");
  const handleFilterClick = createFilterClickHandler(setActiveFilter);
  const filterClickHandlers = filters.map((option) => () => handleFilterClick(option.value));

  return (
    <>
      <S.TopContainer>
        <S.BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.BackButton>
        <S.TopTitle>{title}</S.TopTitle>
        <S.FilterContainer>
          {filters.map((option, index) => (
            <S.FilterButton
              key={option.value}
              isActive={activeFilter === option.value}
              onClick={filterClickHandlers[index]}
            >
              {option.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
      </S.TopContainer>
      <Poster caseType={6} movies={movies} />
    </>
  );
};

export default MovieRatingList;
