import {create} from "zustand";

const useCommentStore = create((set) => ({
  isOpen: false,
  comment: "",
  commentData: null,
  openModal: (data) =>
    set({ isOpen: true, commentData: data, comment: data.comment || "" }),
  closeModal: () => set({ isOpen: false, comment: "", commentData: null }),
  setComment: (newComment) => set({ comment: newComment }),
}));

export default useCommentStore;
