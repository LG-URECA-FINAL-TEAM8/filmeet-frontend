import * as S from '../../styles/rating/rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import useRatingsStore from '../../store/rating/useRatingsStore';
import { useNavigate } from 'react-router-dom';
import MovieRatingSections from './MovieRatingSections';
import { pagecontents } from '../../data/pagecontents';
import {
  createBackClickHandler,
  createFilterClickHandler,
} from '../../utils/ratings/navigationHandlers';
import { useMovieRatings } from '../../apis/myPage/rating/queries';
import { groupMoviesByRating } from '../../utils/ratings/groupMoviesRatings';

const ByRatingList = ({ userId }) => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const navigate = useNavigate();
  const { data, isLoading, error } = useMovieRatings(userId);
  const groupedRatings = groupMoviesByRating(
    data?.data?.content || [],
    pagecontents.movieRatingSections.ratings
  );

  // 하드코딩된 필터 데이터 활용
  const { title, filters } = pagecontents.movieRatingList;

  const handleBackClick = createBackClickHandler(navigate, `ratings/${userId}`);
  const handleFilterClick = createFilterClickHandler(setActiveFilter);
  const filterClickHandlers = filters.map((option) => () => handleFilterClick(option.value));

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>오류가 발생했습니다: {error.message}</div>;

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
              onClick={filterClickHandlers[index]}>
              {filter.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
      </S.TopContainer>
      <MovieRatingSections groupedRatings={groupedRatings} />
    </>
  );
};

export default ByRatingList;
