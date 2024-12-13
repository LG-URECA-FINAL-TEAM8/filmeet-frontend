import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMovieDetail, getMovieComment } from './getMovieDetail';
import { likeMovie } from './rateMovie';
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

export const useMovieLikeUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ movieId }) => likeMovie({ movieId }), // movieId를 인자로 받음
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movieDetail'] });
    },
    onError: (error) => console.error('Mutation error:', error),
  });
};
