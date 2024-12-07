import { useMutation, useQuery } from '@tanstack/react-query';
import { registerMovies } from './addMovie';
import { fetchMovies } from './searchMovies';
import { fetchRegisteredMovies } from './selectMovie';
import { fetchReviewList } from './showReviewList';

export const useAdminSearchMovies = (searchTerm) => {
  return useQuery({
    queryKey: ['searchMovies'],
    queryFn: () => fetchMovies(searchTerm),
    enabled: !!searchTerm,
    refetchOnWindowFocus: false,
  });
};

export const useAdminRegisterMovies = () => {
  return useMutation({
    mutationKey: ['registerMovies'],
    mutationFn: registerMovies,
    onSuccess: () => {
    },
    onError: () => {
    },
  });
};

export const useAdminSelectMovies = () => {
  return useQuery({
    queryKey: ['registeredMovies'],
    queryFn: fetchRegisteredMovies,
    refetchOnWindowFocus: false,
  });
}

export const useAdminShowReviewList = (params) => {
  return useQuery({
      queryKey: ['reviewList', params],
      queryFn: () => fetchReviewList(params),
      keepPreviousData: true, // 이전 데이터 유지
      refetchOnWindowFocus: false,
  });
};