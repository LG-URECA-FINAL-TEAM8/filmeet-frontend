import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VersusText from "./VersusText";
import WorldcupMoviecard from "./WorldcupMoviecard";
import { useGameDetail, useSelectWinner } from "../../apis/worldcup/queries";
import useWorldcupStore from "../../store/worldcup/worldcupStore";
import { useNavigate } from "react-router-dom";

const WorldcupMatch = () => {
  const { gameId, currentRound, setCurrentRound, setWinnerMovie } = useWorldcupStore();
  const { data, refetch } = useGameDetail(gameId); // 게임 상세 조회 API
  const selectWinnerMutation = useSelectWinner();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [roundMatches, setRoundMatches] = useState([]);

  // 라운드 데이터 필터링 및 업데이트
  useEffect(() => {
    if (data?.data?.matches) {
      const matches = data.data.matches.filter((match) => match.roundNumber === currentRound);
      setRoundMatches(matches);
      setCurrentIndex(0); // 새 라운드가 시작될 때 인덱스 초기화
    }
  }, [data, currentRound]);

  const currentMatch = roundMatches[currentIndex];

  // 라운드 종료 처리
  const proceedToNextRound = async () => {
    await refetch();
    setCurrentRound(currentRound / 2);
  };

  // 승자 선택 핸들러
  const handleSelectWinner = (movieId) => {
    selectWinnerMutation.mutate(
      { gameMatchId: currentMatch.id, selectedMovieId: movieId },
      {
        onSuccess: async () => {
  
          // 결승전 처리
          if (currentRound === 2) {
  
            try {
              // 게임 상세 조회를 다시 호출해 우승 영화 확인
              const updatedData = await refetch();
              const finalMatch = updatedData.data?.data?.matches.find(
                (match) => match.roundNumber === 2
              );
  
              const winnerMovie =
                String(finalMatch?.winner) === String(finalMatch?.movie1.movieId)
                  ? finalMatch.movie1
                  : finalMatch.movie2;
  
              setWinnerMovie(winnerMovie);
              navigate("/worldcupfinish"); // 결과 페이지로 이동
            } catch (error) {
              console.error("우승 영화 확인 실패:", error);
            }
            return;
          }
  
          // 다음 매치로 이동
          if (currentIndex + 1 < roundMatches.length) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            proceedToNextRound();
          }
        },
        onError: (error) => {
          console.error("승자 선택 실패:", error);
        },
      }
    );
  };

  if (!currentMatch) {
    return <div>다음 라운드 데이터를 불러오는 중입니다...</div>;
  }

  return (
    <S.MovieGrid>
      <WorldcupMoviecard
        image={currentMatch.movie1.posterUrl}
        title={currentMatch.movie1.title}
        rating={currentMatch.movie1.ratingCounts}
        audience={currentMatch.movie1.likeCounts}
        comments={currentMatch.movie1.commentCounts}
        onClick={() => handleSelectWinner(currentMatch.movie1.movieId)}
      />
      <VersusText />
      <WorldcupMoviecard
        image={currentMatch.movie2.posterUrl}
        title={currentMatch.movie2.title}
        rating={currentMatch.movie2.ratingCounts}
        audience={currentMatch.movie2.likeCounts}
        comments={currentMatch.movie2.commentCounts}
        onClick={() => handleSelectWinner(currentMatch.movie2.movieId)}
      />
    </S.MovieGrid>
  );
};

export default WorldcupMatch;

const S = {
  MovieGrid: styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  `,
};
