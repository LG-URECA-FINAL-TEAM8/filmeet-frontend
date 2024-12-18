import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addFollow, deleteFollow } from './follow';

export const useAddFollow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId }) => addFollow({ userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['followCount'] });
      queryClient.invalidateQueries({ queryKey: ['userInfoId'] });
    },
    onError: (error) => error,
  });
};

export const useDeleteFollow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId }) => deleteFollow({ userId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['followCount'] });
      queryClient.invalidateQueries({ queryKey: ['userInfoId'] });
      queryClient.invalidateQueries({ queryKey: ['followings'] });
    },
    onError: (error) => error,
  });
};
