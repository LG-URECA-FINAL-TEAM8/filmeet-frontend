import { useQuery } from "@tanstack/react-query";
import { getUserCollections } from "./collection";

export const useUserCollections = (userId, page = 0, size = 10) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userCollections", userId, page, size], // userId, page, size를 queryKey로 사용
    queryFn: () => getUserCollections(userId, page, size),
    enabled: !!userId, // userId가 존재할 때만 실행
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });

  return { data, isLoading, error };
};
