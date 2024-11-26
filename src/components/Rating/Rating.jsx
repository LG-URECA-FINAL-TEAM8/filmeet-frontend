import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { TopContainer, BottomContainer, BackButton, TopTitle, Label, Count } from "../../styles/rating/rating";
import { pagecontents } from "../../data/pagecontents";

const Rating = () => {
  const navigate = useNavigate();
  const { title, categories } = pagecontents.profiles;

  const handleCategoryClick = () => {
    navigate("/mypage/contents/movies/ratings");
  };

  const handleBackClick = () => {
    navigate('/mypage');
  };

  return (
    <>
      <TopContainer>
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <TopTitle>{title}</TopTitle>
      </TopContainer>

      {categories.map((category, index) => (
        <BottomContainer key={index} onClick={handleCategoryClick}>
          <Label>{category.label}</Label>
          <Count>{category.count}</Count>
        </BottomContainer>
      ))}
    </>
  );
};

export default Rating;
