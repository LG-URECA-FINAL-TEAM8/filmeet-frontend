import StarRatingBody from "../components/StarRating/StarRatingBody";
import StarRatingHeader from "../components/StarRating/StarRatingHeader";
import { StarRatingPageWrapper } from "../styles/starrating/starrating";

const StarRatingPage = () => {
    return (
      <StarRatingPageWrapper>
        <StarRatingHeader/>
        <StarRatingBody/>
      </StarRatingPageWrapper>
    );
  };
  
export default StarRatingPage;