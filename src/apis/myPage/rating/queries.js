import { useQuery } from '@tanstack/react-query';
import { getMovieRatings } from './rating';

export const useMovieRatings = (userId, page = 0, size = 10, sort = 'createdAt,asc') => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieRatings', page, size, sort], // queryKey에 page, size, sort 포함 (의존성 관리)
    queryFn: () => getMovieRatings(userId, page, size, sort),
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
    enabled: !!userId,
  });

  return { data, isLoading, error };
};
