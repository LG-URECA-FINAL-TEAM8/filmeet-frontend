import { useQuery } from '@tanstack/react-query';
import { getFollowers, getFollowings } from './follow.js';

export const useFollowers = (userId, page = 0, size = 20) => {
  console.log(`useFollowers called with userId: ${userId}`);
    return useQuery({
      queryKey: ['followers', userId, page],
      queryFn: () => getFollowers(userId, page, size),
      enabled: !!userId, // userId가 있을 때만 쿼리를 실행
      refetchOnWindowFocus: false, // 창 포커스 시 쿼리 재실행 방지
    });
  };

  export const useFollowings = (userId, page = 0, size = 20) => {
    return useQuery({
      queryKey: ['followings', userId, page],
      queryFn: () => getFollowings(userId, page, size),
      enabled: !!userId,
      refetchOnWindowFocus: false,
    });
  };
