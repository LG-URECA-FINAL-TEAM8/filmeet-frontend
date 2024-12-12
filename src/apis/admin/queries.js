import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { registerMovies } from './addMovie';
import { fetchMovies } from './searchMovies';
import { fetchRegisteredMovies } from './selectMovie';
import { fetchReviewList } from './showReviewList';
import { reviewBlind } from './reviewBlind';
import { editMovie } from './editMovie';
import { uploadPoster } from "./uploadPoster";

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

export const useAdminSelectMovies = ({ page = 1, size = 7, query = '' }) => {
  return useQuery({
    queryKey: ['registeredMovies', page, query],
    queryFn: () => fetchRegisteredMovies({ page, size, query }),
    refetchOnWindowFocus: true,
  });
};

export const useAdminShowReviewList = (params) => {
  return useQuery({
    queryKey: ['reviewList', params],
    queryFn: () => fetchReviewList(params),
    refetchOnWindowFocus: false,
  });
};

export const useAdminReviewBlind = () => {
  return useMutation({
    mutationFn: reviewBlind,
    onSuccess: () => {
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useAdminEditMovie = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables) => {
      console.log('editMovie 호출 데이터:', variables); // 변수 확인
      return editMovie(variables);
    },
    onSuccess: (data, variables) => {
      
      console.log('영화 정보 수정 성공:', data);
        queryClient.invalidateQueries(['registeredMovies']);
        queryClient.setQueryData(['registeredMovies'], (oldData) => {
          if (!oldData) return oldData;
          return {
            ...oldData,
            content: oldData.content.map((movie) =>
              movie.id === variables.movieId
                ? { ...movie, title: variables.title, image: variables.image, likeCounts: variables.likeCount }
                : movie
              ),
          };
        });
    },
    onError: (error) => {
    console.error('영화 정보 수정 실패:', error.message);
  },
  });
};

export const useAdminAddPoster = () => {
  return useMutation({
    mutationFn: uploadPoster,
    onSuccess: (data) => {
      console.log("포스터 업로드 성공:", data);
      // 업로드 후 추가 로직 (예: 업로드 URL을 상태에 저장)
    },
    onError: (error) => {
      console.error("포스터 업로드 실패:", error.message);
    },
  });
};