import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from './user';

export const useUserInfo = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading, refetch };
};