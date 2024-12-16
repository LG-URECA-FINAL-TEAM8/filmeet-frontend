import { useMutation, useQuery } from "@tanstack/react-query";
import { createGameApi, getGameDetailApi, getRecommendMoviesApi, selectWinnerApi } from "./worldcup";

export const useCreateGame = () => {
    return useMutation({
      mutationFn: (payload) => createGameApi(payload),
      onSuccess: (data) => {
        console.log("게임 생성 성공", data);
      },
      onError: (error) => {
        console.error("게임 생성 실패. 에러 메시지:", error);
      },
    });
  };

  // 게임 조회 훅
export const useGameDetail = (gameId) => {
    return useQuery({
      queryKey: ["gameDetail", gameId],
      queryFn: () => getGameDetailApi(gameId),
      enabled: !!gameId, // gameId가 존재할 때만 요청
      refetchOnWindowFocus: false, // 창 전환 시 재요청 방지
    });
  };
  
  // 승자 선택 훅
  export const useSelectWinner = () => {
    return useMutation({
      mutationFn: ({ gameMatchId, selectedMovieId }) => selectWinnerApi(gameMatchId, selectedMovieId),
      onSuccess: (data) => {
        console.log("승자 선택 성공:", data);
      },
      onError: (error) => {
        console.error("승자 선택 실패:", error.message || error);
      },
    });
  };

  // 추천 영화 React Query 훅
export const useRecommendMovies = (gameId) => {
  return useQuery({
    queryKey: ["recommendations", gameId],
    queryFn: () => getRecommendMoviesApi(gameId),
    enabled: !!gameId, // gameId가 있을 때만 실행
    refetchOnWindowFocus: false, // 창 전환 시 재요청 방지
  });
};

