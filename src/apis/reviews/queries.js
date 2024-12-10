import { useQuery } from '@tanstack/react-query';
import { HotReview } from './review';

export const useHotReview = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['hotReview'],
    queryFn: HotReview,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
