import { TopContainer, BackButton, TopTitle, FilterContainer, FilterButton } from "../../styles/rating/rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";
import MovieRatingSections from "./MovieRatingSections";
import { pagecontents } from "../../data/pagecontents";

const ByRatingList = () => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const { title, filters } = pagecontents.movieRatingList;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/mypage/ratings");
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>{title}</TopTitle>
        <FilterContainer>
          {filters.map((filter) => (
            <FilterButton
              key={filter.value}
              isActive={activeFilter === filter.value}
              onClick={() => handleFilterClick(filter.value)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>
      </TopContainer>
      <MovieRatingSections />
    </>
  );
};

export default ByRatingList;
