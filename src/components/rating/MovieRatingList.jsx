import * as S from '../../styles/rating/rating';
import Poster from '../common/poster/Poster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import useRatingsStore from '../../store/rating/useRatingsStore';
import { useNavigate } from 'react-router-dom';
import {
  createBackClickHandler,
  createFilterClickHandler,
} from '../../utils/ratings/navigationHandlers';
import { useMovieRatings } from '../../apis/myPage/rating/queries';
import Loading from '../common/loading/Loading';

const MovieRatingList = ({ userId }) => {
  const { activeFilter, setActiveFilter } = useRatingsStore();
  const navigate = useNavigate();
  // 평가한 영화 데이터 가져오기
  const { data, isLoading, error } = useMovieRatings(userId);
  const movies = data?.data?.content || [];

  const { title, filters } = {
    title: '평가한 작품들',
    filters: [
      { label: '전체', value: '전체' },
      { label: '별점 순', value: '별점 순' },
    ],
  };

  const handleBackClick = createBackClickHandler(navigate, `ratings/${userId}`);
  const handleFilterClick = createFilterClickHandler(setActiveFilter);
  const filterClickHandlers = filters.map((option) => () => handleFilterClick(option.value));

  // 로딩 상태 처리
  if (isLoading) return <Loading />;
  if (error) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  return (
    <>
      <S.TopContainer>
        <S.BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.BackButton>
        <S.TopTitle>{title}</S.TopTitle>
        <S.FilterContainer>
          {filters.map((option, id) => (
            <S.FilterButton
              key={option.value}
              isActive={activeFilter === option.value}
              onClick={filterClickHandlers[id]}>
              {option.label}
            </S.FilterButton>
          ))}
        </S.FilterContainer>
      </S.TopContainer>

      {/* Poster 컴포넌트에 API 데이터 전달 */}
      <Poster caseType={6} movies={movies} />
    </>
  );
};

export default MovieRatingList;
