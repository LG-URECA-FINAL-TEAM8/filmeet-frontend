import { create } from "zustand";

export const useLikesStore = create((set) => ({
  likes: {},
  toggleLike: (commentId) =>
    set((state) => {
      const current = state.likes[commentId] || { count: 0, isLiked: false };
      const updated = {
        count: current.isLiked ? current.count - 1 : current.count + 1,
        isLiked: !current.isLiked,
      };
      return {
        likes: {
          ...state.likes,
          [commentId]: updated,
        },
      };
    }),
}));
