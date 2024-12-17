import { useQuery } from '@tanstack/react-query';
import { getUserComments } from './comment';

export const useUserComments = (userId) => {
  return useQuery({
    queryKey: ['userComments', userId],
    queryFn: () => getUserComments(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
  });
};
