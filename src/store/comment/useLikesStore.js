import { create } from "zustand";

const useLikesStore = create((set) => ({
  likes: {},
  toggleLike: (commentId, initialCount) =>
    set((state) => {
      const current = state.likes[commentId] || { count: initialCount || 0, isLiked: false };
      const updatedCount = current.isLiked ? current.count - 1 : current.count + 1;
      return {
        likes: {
          ...state.likes,
          [commentId]: { count: updatedCount, isLiked: !current.isLiked },
        },
      };
    }),
}));

export default useLikesStore;
