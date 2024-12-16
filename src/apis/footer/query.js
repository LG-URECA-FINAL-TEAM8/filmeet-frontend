import { useQuery } from '@tanstack/react-query';
import { ratingTotal } from './totalCount';

export const useRatingTotal = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['ratingTotal'],
    queryFn: ratingTotal,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
