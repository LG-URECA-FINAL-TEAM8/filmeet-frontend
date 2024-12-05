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
    mutationFn: registerMovies,
    onSuccess: () => {
      alert('영화 등록 성공');
    },
    onError: (error) => {
      alert(`등록 실패: ${error.message}`);
    },
  });
};