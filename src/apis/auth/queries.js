import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUp, Login } from './auth';

export const useSignUp = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: SignUp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userSignUp'] });
    },
    onError: (error) => {
      return error;
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userLogin'] });
    },
    onError: (error) => error,
  });
};
