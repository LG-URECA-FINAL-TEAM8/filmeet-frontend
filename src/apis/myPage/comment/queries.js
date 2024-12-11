import { useQuery } from "@tanstack/react-query";
import { getUserComments } from "./comment";

export const useUserComments = (page = 0, size = 10, sort = "createdAt,desc") => {
  return useQuery({
    queryKey: ["userComments", page, size, sort],
    queryFn: () => getUserComments(page, size, sort),
    refetchOnWindowFocus: false,
  });
};
