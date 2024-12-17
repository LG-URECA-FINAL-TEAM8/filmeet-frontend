import { useQuery } from '@tanstack/react-query';
import { getUserInfo, userInfoId } from './user';

export const useUserInfo = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading, refetch };
};

export const useUserInfoId = (userId) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['userInfoId'],
    queryFn: () => userInfoId({ userId }),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });
  return { data, error, isLoading };
};
