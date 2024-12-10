import { useQuery } from "@tanstack/react-query";
import { getMovieRatings } from "./rating";

export const useMovieRatings = (page = 0, size = 10, sort = "createdAt,asc") => {
  return useQuery({
    queryKey: ["movieRatings", page, size, sort],
    queryFn: () => getMovieRatings(page, size, sort),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
