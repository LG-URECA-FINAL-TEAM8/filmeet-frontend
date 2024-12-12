import { useQuery } from '@tanstack/react-query';
import { getMovieDetail } from './getMovieDetail';
export const useMovieDetail = (movieId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieDetail(movieId),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
