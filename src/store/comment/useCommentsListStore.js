import { create } from "zustand";

export const useCommentsStore = create((set) => ({
  comments: [],
  setComments: (newComments) => set({ comments: newComments }),
}));
