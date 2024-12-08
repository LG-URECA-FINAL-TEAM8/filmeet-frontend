import ResultCard from "../components/worldcup/ResultCard";
import ResultFooter from "../components/worldcup/ResultFooter";
import { FinishPageWrapper } from "../styles/worldcup/worldcup";

const WorldcupFinishPage = () => {
    const resultData = {
        image: "https://via.placeholder.com/300x400",
        title: "결과 영화",
        rating: 4.5,
        likes: 123,
        comments: 45,
      };

  return (
    <FinishPageWrapper>
      <ResultCard
        image={resultData.image}
        title={resultData.title}
        rating={resultData.rating}
        likes={resultData.likes}
        comments={resultData.comments}
      />
      <ResultFooter />
    </FinishPageWrapper>
  );
};

export default WorldcupFinishPage;
