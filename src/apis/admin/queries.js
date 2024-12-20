import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchMovies } from './searchMovies';
import { registerMovies } from './addMovie';
import { fetchRegisteredMovies } from './selectMovie';
import { fetchReviewList } from './showReviewList';
import { reviewBlind } from './reviewBlind';
import { editMovie } from './editMovie';
import { uploadPoster } from './uploadPoster';
import { deleteMovie } from './deleteMovie';
import { movieRecommend } from './movieRecommend';

export const useAdminSearchMovies = (searchTerm) => {
  return useQuery({
    queryKey: ['adminSearchMovies'],
    queryFn: () => fetchMovies(searchTerm),
    enabled: !!searchTerm,
    refetchOnWindowFocus: false,
  });
};

export const useAdminRegisterMovies = (clearSelection) => {
  return useMutation({
    mutationKey: ['adminRegisterMovies'],
    mutationFn: registerMovies,
    onSuccess: () => {
      alert(`영화가 성공적으로 등록되었습니다.`);
      clearSelection();
    },
    onError: (error) => {
      alert(`등록 실패: ${error.message}`);
    },
  });
};

export const useAdminSelectMovies = ({ page = 1, size = 7, query = '' }) => {
  return useQuery({
    queryKey: ['adminFetchMovies', page, query],
    queryFn: () => fetchRegisteredMovies({ page, size, query }),
    refetchOnWindowFocus: false,
  });
};

export const useAdminShowReviewList = ({ movieTitle, sort, size, page }) => {
  return useQuery({
    queryKey: ['adminReviewList', movieTitle, sort, size, page],
    queryFn: () => fetchReviewList({ movieTitle, sort, size, page }),
    refetchOnWindowFocus: false,
    staleTime: 0,
  });
};

export const useAdminReviewBlind = () => {
  return useMutation({
    mutationFn: reviewBlind,
    onSuccess: () => {
      alert('리뷰가 블라인드 처리되었습니다.');
    },
    onError: () => {
      alert('리뷰 블라인드 처리 중 오류가 발생했습니다.');
    },
  });
};

export const useAdminEditMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (variables) => {
      return editMovie(variables);
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['adminFetchMovies']);
      queryClient.setQueryData(['adminFetchMovies'], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          content: oldData.content.map((movie) =>
            movie.id === variables.movieId
              ? {
                  ...movie,
                  title: variables.title,
                  image: variables.image,
                  likeCounts: variables.likeCount,
                }
              : movie
          ),
        };
      });
    },
    onError: (error) => {
      alert(`영화 정보 수정 실패: ${error.message}`);
    },
  });
};

export const useAdminAddPoster = () => {
  return useMutation({
    mutationFn: uploadPoster,
    onSuccess: () => {
      alert('포스터 업로드 성공');
    },
    onError: (error) => {
      console.error('포스터 업로드 실패:', error.message);
    },
  });
};

export const useAdminDeleteMovie = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (movieId) => deleteMovie(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminFetchMovies'] });
    },
    onError: (error) => {
      console.error('영화 삭제 실패:', error);
      alert('영화 삭제 중 오류가 발생했습니다.');
    },
  });
};

export const useAdminMovieRecommend = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: movieRecommend,
    onSuccess: () => {
      alert('추천 영화가 성공적으로 업데이트되었습니다.');
      queryClient.invalidateQueries(['adminFetchMovies']);
    },
    onError: (error) => {
      console.error('추천 영화 업데이트 실패:', error.message);
      alert('추천 영화 업데이트에 실패했습니다.');
    },
  });
};
