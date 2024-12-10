import { create } from "zustand";

const useMovieCommentStore = create((set) => ({
  isModalOpen: false,
  comment: "",
  likedComments: {}, // 좋아요 상태 저장
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, comment: "" }),
  setComment: (newComment) => set({ comment: newComment }),
  toggleLike: (reviewId) =>
    set((state) => ({
      likedComments: {
        ...state.likedComments,
        [reviewId]: !state.likedComments[reviewId],
      },
    })),
}));

export default useMovieCommentStore;
