import { useQuery } from '@tanstack/react-query';
import {
  UpComingMovies,
  BoxOfficeMovies,
  FillMeetTop,
  Recommendation,
  RandomGenre,
  fetchEvaluation,
} from './movies';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useUpcoming = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['upcoming'],
    queryFn: UpComingMovies,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useBoxOffice = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['boxoffice'],
    queryFn: BoxOfficeMovies,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useTopTen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['topTen'],
    queryFn: FillMeetTop,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};

export const useRecommendation = (userId, options = {}) => {
  const { data, isLoading, error } = useQuery({
    staleTime: 5 * 60 * 1000,
    queryKey: ['recommendation', userId],
    queryFn: () => Recommendation(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId,
    ...options,
  });

  return { data, isLoading, error };
};

export const useRandomGenre = (options = {}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['randomGenre'],
    queryFn: RandomGenre,
    refetchOnWindowFocus: false,
    ...options,
  });

  return { data, isLoading, error };
};

export const useEvaluation = () => {
  return useInfiniteQuery({
    queryKey: ['evaluation'],
    queryFn: fetchEvaluation,
    getNextPageParam: (lastPage) => {
      return lastPage.data.moviesResponseSliceResponse?.hasNext
        ? lastPage.data.moviesResponseSliceResponse.currentPage + 1
        : undefined;
    },
    refetchOnWindowFocus: false,
  });
};
