import { useQuery } from '@tanstack/react-query';
import { getNotification } from './notifications';

export const useNotification = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['userInfo'],
    queryFn: getNotification,
    refetchOnWindowFocus: false,
  });

  return { data, error, isLoading, refetch };
};
