import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchMovies, registerMovies } from './addMovie';

// 영화 검색 쿼리
export const useSearchMovies = (searchTerm) => {
  return useQuery({
    queryKey: ['searchMovies', searchTerm],
    queryFn: () => fetchMovies(searchTerm),
    enabled: !!searchTerm, // searchTerm이 있을 때만 실행
    refetchOnWindowFocus: false,
  });
};

// 영화 등록 뮤테이션
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