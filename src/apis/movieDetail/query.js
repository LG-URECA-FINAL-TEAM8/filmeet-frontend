import { useQuery } from '@tanstack/react-query';
import { getMovieDetail, getMovieComment } from './getMovieDetail';
export const useMovieDetail = (movieId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieDetail', movieId],
    queryFn: () => getMovieDetail(movieId),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useMovieComment = (movieId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['movieComment', movieId],
    queryFn: () => getMovieComment(movieId),
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
