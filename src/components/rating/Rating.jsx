import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../styles/rating/rating";
import { createBackClickHandler } from "../../utils/ratings/navigationHandlers";
import { useMovieRatings } from "../../apis/myPage/rating/queries";

const Rating = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useMovieRatings(0, 1000, "createdAt,asc");

  const handleCategoryClick = () => {
    navigate("/mypage/contents/movies/ratings");
  };

  const handleBackClick = createBackClickHandler(navigate, "/mypage");

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    console.error("Error fetching ratings:", error);
    return <div>오류가 발생했습니다: {error.message}</div>;
  }
  
  const categories = [
    { label: "영화", count: data?.data?.content?.length || 0 }, // 평가 데이터의 개수 계산
  ];

  return (
    <>
      <S.TopContainer>
        <S.BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.BackButton>
        <S.TopTitle>평가</S.TopTitle>
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
