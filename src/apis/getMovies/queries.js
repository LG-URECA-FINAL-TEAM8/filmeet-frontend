import { useQuery } from '@tanstack/react-query';
import { UpComingMovies, BoxOfficeMovies, FillMeetTop } from './movies';

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
