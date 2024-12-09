import { useMutation, useQuery } from '@tanstack/react-query';
import { registerMovies } from './addMovie';
import { fetchMovies } from './searchMovies';
import { fetchRegisteredMovies } from './selectMovie';
import { fetchReviewList } from './showReviewList';
import { reviewBlind } from './reviewBlind';
import { editLike } from './editLike';
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

export const useAdminSelectMovies = ({ page = 1, size = 10, searchTerm = '' }) => {
  return useQuery({
      queryKey: ['registeredMovies', page, size, searchTerm],
      queryFn: () => fetchRegisteredMovies({ page, size, searchTerm }),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
  });
};

export const useAdminShowReviewList = (params) => {
  return useQuery({
      queryKey: ['reviewList', params],
      queryFn: () => fetchReviewList(params),
      keepPreviousData: true, // 이전 데이터 유지
      refetchOnWindowFocus: false,
  });
};

export const useAdminReviewBlind = () => {
  return useMutation({
    mutationFn: reviewBlind, // mutation 함수 전달
    onSuccess: () => {
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useAdminEditLikes = () => {
  return useMutation({
      mutationFn: editLike,
      onSuccess: () => {
          console.log('좋아요 수 수정 성공');
      },
      onError: (error) => {
          console.error('좋아요 수 수정 실패:', error.message);
      },
  });
};
