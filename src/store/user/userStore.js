import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: {
        id: null,
        nickname: '',
        role: '',
        profileImage: '',
      },
      setUserInfo: (newUserInfo) =>
        set((state) => ({
          userInfo: {
            id: null,
            nickname: '',
            role: '',
            profileImage: '',
            ...state.userInfo,
            ...newUserInfo,
          },
        })),
      resetUserInfo: () =>
        set(() => ({
          userInfo: {
            id: null,
            nickname: '',
            role: '',
            profileImage: '',
          },
        })),
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;
