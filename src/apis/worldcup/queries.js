import { useMutation } from "@tanstack/react-query";
import { createGameApi } from "./worldcup";

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
  
