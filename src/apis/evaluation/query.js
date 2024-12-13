import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Evaluation } from './evaluation';
export const useMovieEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Evaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluation'] });
      queryClient.invalidateQueries({ queryKey: ['movieDetail'] });
    },
    onError: (error) => console.error('Mutation error:', error),
  });
};
