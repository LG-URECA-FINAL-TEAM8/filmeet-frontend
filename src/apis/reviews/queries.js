import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { HotReview, addMyReview } from './review';

export const useHotReview = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['hotReview'],
    queryFn: HotReview,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useAddMyReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ content, movieId, reviewId }) => addMyReview({ content, movieId, reviewId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movieDetail'] });
    },
    onError: (error) => console.error('Mutation error:', error),
  });
};
