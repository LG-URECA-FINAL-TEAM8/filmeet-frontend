import { create } from 'zustand';

export const useLikesStore = create((set) => ({
  likes: {}, 

  initializeLikes: (commentId, isLiked, likeCounts) => {
    set((state) => ({
      likes: {
        ...state.likes,
        [commentId]: { isLiked, likeCounts },
      },
    }));
  },

  toggleLikeStatus: (commentId, isLiked, likeCounts) => {
    set((state) => ({
      likes: {
        ...state.likes,
        [commentId]: { isLiked, likeCounts },
      },
    }));
  },
}));
