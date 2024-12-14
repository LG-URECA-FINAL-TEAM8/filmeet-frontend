import { create } from "zustand";

const useCommentDeleteStore = create((set) => ({
  isModalOpen: false,
  selectedComment: null, // 선택된 댓글 정보

  openModal: (comment) => {
    if (!comment) {
      return;
    }
    set({ isModalOpen: true, selectedComment: comment });
  },

  closeModal: () => set({ isModalOpen: false, selectedComment: null }),
}));

export default useCommentDeleteStore;
