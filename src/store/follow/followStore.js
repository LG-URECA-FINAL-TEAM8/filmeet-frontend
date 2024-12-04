import { create } from 'zustand';

export const useFollowStore = create((set) => ({
  followStates: [],
  followingStates: [],
  initializeFollowStates: (initialStates) => set({ followStates: initialStates }),
  initializeFollowingStates: (initialStates) => set({ followingStates: initialStates }),
  toggleFollow: (index) =>
    set((state) => {
      const updatedStates = [...state.followStates];
      updatedStates[index] = !updatedStates[index];
      return { followStates: updatedStates };
    }),
  toggleFollowing: (index) =>
    set((state) => {
      const updatedStates = [...state.followingStates];
      updatedStates[index] = !updatedStates[index];
      return { followingStates: updatedStates };
    }),
}));

