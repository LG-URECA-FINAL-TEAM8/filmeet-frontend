import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFollow } from './follow';

export const useAddFollow = () => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId }) => addFollow({ userId }),
    onSuccess: () => {
      // queryClient.invalidateQueries({ queryKey: ['userLogin'] });
    },
    onError: (error) => error,
  });
};
