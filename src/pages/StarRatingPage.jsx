import StarRatingBody from '../components/StarRating/StarRatingBody';
import StarRatingHeader from '../components/StarRating/StarRatingHeader';
import { StarRatingPageWrapper } from '../styles/starrating/starrating';

const StarRatingPage = () => {
  return (
    <StarRatingPageWrapper>
      <StarRatingHeader />
      <StarRatingBody />
    </StarRatingPageWrapper>
  );
};
//영화 평가 페이지(헤더)
export default StarRatingPage;
