import { useQuery } from '@tanstack/react-query';
import { getUserFollowCount } from './userNetwork';

export const useFollowCount = (userId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['followCount', userId], // queryKey에 userId 추가 (의존성 관리)
    queryFn: () => getUserFollowCount(userId),
    enabled: !!userId,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
