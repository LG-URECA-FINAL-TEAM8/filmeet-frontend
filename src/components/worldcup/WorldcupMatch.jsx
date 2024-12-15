import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VersusText from "./VersusText";
import WorldcupMoviecard from "./WorldcupMoviecard";
import { useGameDetail, useSelectWinner } from "../../apis/worldcup/queries";
import useWorldcupStore from "../../store/worldcup/worldcupStore";

const WorldcupMatch = ({ onGameFinish }) => {
  const { gameId, currentRound, setCurrentRound, setWinnerMovie } = useWorldcupStore();
  const { data, refetch } = useGameDetail(gameId); // 게임 상세 조회 API
  const selectWinnerMutation = useSelectWinner();

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
    if (currentRound === 2) {
      console.log("게임 종료!");
      setWinnerMovie(currentMatch.movie1); // movie1을 우승 영화로 설정
      onGameFinish();
      return;
    }

    console.log(`라운드 ${currentRound} 종료. 다음 라운드 진행.`);

    // 최신 게임 데이터를 가져와 다음 라운드 설정
    await refetch();
    setCurrentRound(currentRound / 2);
  };

  // 승자 선택 핸들러
  const handleSelectWinner = (movieId) => {
    selectWinnerMutation.mutate(
      { gameMatchId: currentMatch.id, selectedMovieId: movieId },
      {
        onSuccess: () => {
          console.log("승자 선택 완료!");

          // 다음 매치로 이동
          if (currentIndex + 1 < roundMatches.length) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            // 현재 라운드 모든 매치 완료
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
