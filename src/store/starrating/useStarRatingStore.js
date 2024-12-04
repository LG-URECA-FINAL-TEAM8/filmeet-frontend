import { create } from "zustand";

export const useStarRatingStore = create((set) => ({
  ratings: {},
  ratedCount: 0,
  setRating: (movieId, value) =>
    set((state) => {
      const newRatings = { ...state.ratings, [movieId]: value };
      const ratedCount = Object.values(newRatings).filter((rating) => rating > 0).length;
      return { ratings: newRatings, ratedCount };
    }),
}));
