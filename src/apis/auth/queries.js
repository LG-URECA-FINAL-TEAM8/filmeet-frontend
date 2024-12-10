import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SignUp, Login, Preference } from './auth';

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

export const usePreference = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: Preference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userPreference'] });
    },
    onError: (error) => error,
  });
};
