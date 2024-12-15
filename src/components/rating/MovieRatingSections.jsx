import Poster from '../Common/poster/Poster';
import * as S from '../../styles/rating/rating';
import { useNavigate } from 'react-router-dom';
import { pagecontents } from '../../data/pagecontents';

const MovieRatingSections = ({ groupedRatings }) => {
  const navigate = useNavigate();

  const { sectionTitle, noResults, moreButton } = pagecontents.movieRatingSections;

  const handleMoreClick = (rating) => () => {
    navigate(`/mypage/contents/movies/ratings/${rating}`);
  };

  const renderContent = (moviesForRating) => {
    if (moviesForRating.length > 0) {
      return <Poster caseType={7} movies={moviesForRating.slice(0, 10)} />;
    }
    return <S.NoResults>{noResults}</S.NoResults>;
  };

  return (
    <>
      {pagecontents.movieRatingSections.ratings.map((rating) => (
        <S.SectionContainer key={rating}>
          <S.SectionHeader>
            <S.SectionTitle>
              {`${rating.toFixed(1)} ${sectionTitle}`}
              <S.SectionCount>{groupedRatings[rating]?.length || 0}</S.SectionCount>
            </S.SectionTitle>
            <S.MoreButton onClick={handleMoreClick(rating)}>{moreButton}</S.MoreButton>
          </S.SectionHeader>
          {renderContent(groupedRatings[rating] || [])}
        </S.SectionContainer>
      ))}
    </>
  );
};

export default MovieRatingSections;
