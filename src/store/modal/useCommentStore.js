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
      comment: type === "comment" ? "" : data?.comment || "",
    }),
  closeModal: () =>
    set({ isOpen: false, modalType: null, comment: "", commentData: null }),
  setComment: (newComment) => set({ comment: newComment }),
}));

export default useCommentStore;
