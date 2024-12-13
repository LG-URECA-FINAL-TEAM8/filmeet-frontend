import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Evaluation, deleteEvaluation } from './evaluation';
export const useMovieEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Evaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluation'] });
      queryClient.invalidateQueries({ queryKey: ['movieDetail'] });
    },
    onError: (error) => console.error('영화 평가 등록 에러 error:', error),
  });
};

export const useDeleteEvaluation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteEvaluation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['evaluation'] });
      queryClient.invalidateQueries({ queryKey: ['movieDetail'] });
    },
    onError: (error) => console.error('영화 평가 삭제 에러:', error),
  });
};
