import { create } from "zustand";

const useMovieCommentStore = create((set) => ({
  isModalOpen: false,
  comment: "",
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, comment: "" }),
  setComment: (newComment) => set({ comment: newComment }),
}));

export default useMovieCommentStore;
