import * as S from "../../styles/rating/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";
import MovieRatingSections from "./MovieRatingSections";
import { pagecontents } from "../../data/pagecontents";
import { createBackClickHandler, createFilterClickHandler } from "../../utils/ratings/navigationHandlers";

const ByRatingList = () => {
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
          {filters.map((filter, index) => (
            <S.FilterButton
              key={filter.value}
              isActive={activeFilter === filter.value}
              onClick={filterClickHandlers[index]}
            >
              {filter.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
      </S.TopContainer>
      <MovieRatingSections />
    </>
  );
};

export default ByRatingList;
