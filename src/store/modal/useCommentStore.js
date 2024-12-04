import { create } from "zustand";

const useCommentStore = create((set) => ({
  isOpen: false,
  modalType: null,
  comment: "",
  commentData: null,

  openModal: (type, data) =>
    set({
      isOpen: true,
      modalType: type,
      commentData: data,
      comment: data?.content || "", 
    }),

  closeModal: () =>
    set({ isOpen: false, modalType: null, comment: "", commentData: null }),

  setComment: (newComment) => set({ comment: newComment }),

  clearComment: () => set({ comment: "", commentData: null }),
}));

export default useCommentStore;
