import { useQuery } from '@tanstack/react-query';
import { getMovieRatings } from './rating';

export const useMovieRatings = (page = 0, size = 10, sort = 'createdAt,asc') => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieRatings', page, size, sort], // queryKey에 page, size, sort 포함 (의존성 관리)
    queryFn: () => getMovieRatings(page, size, sort),
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });

  return { data, isLoading, error };
};
