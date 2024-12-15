import { useEffect } from "react";
import ResultCard from "../../components/worldcup/ResultCard";
import ResultFooter from "../../components/worldcup/ResultFooter";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { FinishPageWrapper } from "../../styles/worldcup/worldcup";
import { useRecommendMovies } from "../../apis/worldcup/queries";

const WorldcupFinishPage = () => {
  const { gameId, winnerMovie } = useWorldcupStore(); // 게임 ID와 우승 영화 정보
  const { data, isLoading, error } = useRecommendMovies(gameId); // 추천 영화 쿼리

  // 데이터 확인을 위한 콘솔 출력
  useEffect(() => {
    if (data) console.log("추천 영화 데이터:", data);
  }, [data]);

  if (!winnerMovie) return <div>우승 영화 데이터를 불러오는 중입니다...</div>;
  if (isLoading) return <div>추천 영화를 불러오는 중입니다...</div>;
  if (error) return <div>추천 영화 불러오기 실패: {error.message}</div>;

  return (
    <FinishPageWrapper>
      {/* 우승 영화 표시 */}
      <h2>🎉 우승 영화 🎉</h2>
      <ResultCard
        image={winnerMovie.posterUrl}
        title={winnerMovie.title}
        rating={winnerMovie.ratingCounts || 0}
        likes={winnerMovie.likeCounts || 0}
        comments={winnerMovie.commentCounts || 0}
      />

      {/* 추천 영화 표시 */}
      <div>
        <h3>📌 월드컵 결과에 따른 추천 영화</h3>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {data?.data?.map((movie) => (
            <ResultCard
              key={movie.movieId}
              image={movie.posterUrl}
              title={movie.title}
              rating={movie.ratingCounts || 0}
              likes={movie.likeCounts || 0}
              comments={movie.commentCounts || 0}
            />
          ))}
        </div>
      </div>

      {/* 페이지 하단 푸터 */}
      <ResultFooter />
    </FinishPageWrapper>
  );
};

export default WorldcupFinishPage;
