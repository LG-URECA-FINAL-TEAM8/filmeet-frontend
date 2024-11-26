import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../styles/rating/rating"; // S로 스타일 컴포넌트 import
import { pagecontents } from "../../data/pagecontents";

const Rating = () => {
  const navigate = useNavigate();
  const { title, categories } = pagecontents.profiles;

  const handleCategoryClick = () => {
    navigate("/mypage/contents/movies/ratings");
  };

  const handleBackClick = () => {
    navigate("/mypage");
  };

  return (
    <>
      <S.TopContainer>
        <S.BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.BackButton>
        <S.TopTitle>{title}</S.TopTitle>
      </S.TopContainer>

      {categories.map((category, index) => (
        <S.BottomContainer key={index} onClick={handleCategoryClick}>
          <S.Label>{category.label}</S.Label>
          <S.Count>{category.count}</S.Count>
        </S.BottomContainer>
      ))}
    </>
  );
};

export default Rating;
