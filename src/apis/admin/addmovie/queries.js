import { useMutation, useQuery } from '@tanstack/react-query';
import { registerMovies } from './addMovie';
import { fetchMovies } from './searchMovies';

export const useSearchMovies = (searchTerm) => {
  return useQuery({
    queryKey: ['searchMovies'],
    queryFn: () => fetchMovies(searchTerm),
    enabled: !!searchTerm,
    refetchOnWindowFocus: false,
  });
};

export const useRegisterMovies = () => {
  return useMutation({
    mutationKey: ['registerMovies'],
    mutationFn: registerMovies,
    onSuccess: () => {
    },
    onError: () => {
    },
  });
};