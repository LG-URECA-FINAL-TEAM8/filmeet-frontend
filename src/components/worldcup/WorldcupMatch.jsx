import React, { useEffect } from "react";
import styled from "styled-components";
import VersusText from "./VersusText";
import WorldcupMoviecard from "./WorldcupMoviecard";
import { useGameDetail, useSelectWinner } from "../../apis/worldcup/queries";
import useWorldcupStore from "../../store/worldcup/worldcupStore";

const WorldcupMatch = ({ onNextRound }) => {
  const {
    gameId,
    currentRound,
    currentMatches,
    setCurrentMatches,
    nextRoundMatches,
    setNextRoundMatches,
    resetNextRoundMatches,
    currentMatchIndex,
    setCurrentMatchIndex,
    incrementMatchIndex,
  } = useWorldcupStore();

  const { data, isLoading, error } = useGameDetail(gameId);
  const selectWinnerMutation = useSelectWinner();

  // 초기 데이터 로드
  useEffect(() => {
    if (data && data.data && currentMatches.length === 0) {
      const initialMatches = data.data.matches.slice(0, currentRound); // 현재 라운드 매치 데이터 설정
      console.log("초기 currentMatches 설정:", initialMatches);
      setCurrentMatches(initialMatches);
    }
  }, [data, currentRound, setCurrentMatches]);

  // 모든 매치가 완료되었을 때만 다음 라운드로 이동
  useEffect(() => {
    console.log("currentMatchIndex:", currentMatchIndex);
    console.log("currentMatches length:", currentMatches.length);
    console.log("nextRoundMatches length:", nextRoundMatches.length);
    console.log("currentRound / 2:", currentRound / 2);

    if (
      currentMatchIndex >= currentMatches.length && // 모든 매치 완료
      nextRoundMatches.length === currentRound / 2 // 다음 라운드 매치 완성
    ) {
      console.log("다음 라운드로 이동합니다.");
      onNextRound(nextRoundMatches); // 다음 라운드로 이동
      resetNextRoundMatches(); // 다음 라운드 매치 데이터 초기화
      setCurrentMatchIndex(0); // 매치 인덱스 초기화
    }
  }, [
    currentMatchIndex,
    currentMatches.length,
    nextRoundMatches.length,
    currentRound,
    onNextRound,
    resetNextRoundMatches,
    setCurrentMatchIndex,
  ]);

  if (isLoading) return <div>매치 데이터를 불러오는 중입니다...</div>;
  if (error) return <div>매치 데이터를 불러오는 데 실패했습니다. 다시 시도해주세요.</div>;

  const currentMatch = currentMatches[currentMatchIndex]; // 현재 처리 중인 매치

  if (!currentMatch) {
    // 모든 매치가 완료된 경우
    return <div>다음 라운드로 이동 중...</div>;
  }

  // 승자 선택 핸들러
  const handleSelectWinner = (movieId) => {
    console.log("영화 선택됨:", movieId);

    selectWinnerMutation.mutate(
      {
        gameMatchId: currentMatch.id, // 현재 매치 ID
        selectedMovieId: movieId, // 선택한 영화 ID
      },
      {
        onSuccess: () => {
          console.log("승자 선택 완료!");

          // 다음 라운드 데이터를 업데이트
          setNextRoundMatches((prevMatches) => {
            console.log("기존 nextRoundMatches 상태:", prevMatches);
            const updatedMatches = [...prevMatches];
            const lastMatch = updatedMatches[updatedMatches.length - 1];

            if (lastMatch && !lastMatch.movie2) {
              console.log("lastMatch.movie2가 비어 있음. movie2 추가 중...");
              lastMatch.movie2 =
                currentMatch.movie1.movieId === movieId
                  ? currentMatch.movie1
                  : currentMatch.movie2;
            } else {
              console.log("새로운 매치 추가...");
              updatedMatches.push({
                id: `next-${updatedMatches.length}`,
                movie1:
                  currentMatch.movie1.movieId === movieId
                    ? currentMatch.movie1
                    : currentMatch.movie2,
                movie2: null,
              });
            }

            console.log("nextRoundMatches 상태 업데이트 완료:", updatedMatches);
            return updatedMatches;
          });

          incrementMatchIndex(); // 다음 매치로 이동
        },
        onError: (error) => {
          console.error("승자 선택 실패:", error);
        },
      }
    );
  };

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
