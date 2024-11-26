import { TopContainer, BackButton, TopTitle, FilterContainer, FilterButton } from "../../styles/rating/rating";
import Poster from '../../components/Common/poster/Poster';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useRatingsStore from "../../store/rating/useRatingsStore";
import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import { pagecontents } from "../../data/pagecontents";

const MovieRatingList = () => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const { title, filters } = pagecontents.movieRatingList;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/mypage/ratings');
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
          {filters.map((option) => (
            <FilterButton
              key={option.value}
              isActive={activeFilter === option.value}
              onClick={() => handleFilterClick(option.value)}
            >
              {option.label}
            </FilterButton>
          ))}
        </FilterContainer>
      </TopContainer>
      <Poster caseType={6} movies={movies} />
    </>
  );
};

export default MovieRatingList;
