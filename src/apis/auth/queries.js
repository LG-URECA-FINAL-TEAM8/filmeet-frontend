import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUp } from './auth';

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => error,
  });
};
