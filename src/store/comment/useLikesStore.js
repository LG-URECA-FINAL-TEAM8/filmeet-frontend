import { create } from "zustand";

export const useLikesStore = create((set) => ({
  likes: {},
  toggleLike: (commentId) =>
    set((state) => {
      const current = state.likes[commentId] || { count: 0, isLiked: false };
      const isLiked = !current.isLiked;
      const count = isLiked ? current.count + 1 : current.count - 1;

      return {
        likes: {
          ...state.likes,
          [commentId]: { count, isLiked },
        },
      };
    }),
}));
