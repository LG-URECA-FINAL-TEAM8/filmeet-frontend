import { useQuery } from '@tanstack/react-query';
import { UpComingMovies } from './movies';

export const useUpcoming = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['upcoming'],
    queryFn: UpComingMovies,
  });

  return { data, isLoading, error };
};
