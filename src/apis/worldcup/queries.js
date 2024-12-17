import { useMutation, useQuery } from "@tanstack/react-query";
import { createGameApi, getGameDetailApi, getGameRankingsApi, getRecommendMoviesApi, selectWinnerApi } from "./worldcup";

export const useCreateGame = () => {
    return useMutation({
      mutationFn: (payload) => createGameApi(payload),
      onSuccess: () => {
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
      onSuccess: () => {
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

// 게임 랭킹 조회 훅
export const useGameRankings = () => {
  return useQuery({
    queryKey: ["gameRankings"],
    queryFn: getGameRankingsApi,
    refetchOnWindowFocus: false, // 창 전환 시 재요청 방지
  });
};
