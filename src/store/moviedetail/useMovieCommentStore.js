import { create } from "zustand";

const useMovieCommentStore = create((set) => ({
  isModalOpen: false,
  comment: "",
  isLiked: false, // 좋아요 상태 추가
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, comment: "" }),
  setComment: (newComment) => set({ comment: newComment }),
  toggleLike: () => set((state) => ({ isLiked: !state.isLiked })), // 좋아요 토글 액션 추가
}));

export default useMovieCommentStore;
