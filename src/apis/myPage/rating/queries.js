import { useQuery } from '@tanstack/react-query';
import { getMovieRatings } from './rating';

export const useMovieRatings = (userId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieRatings', userId],
    queryFn: () => getMovieRatings(userId),
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
    enabled: !!userId,
  });

  return { data, isLoading, error };
};
