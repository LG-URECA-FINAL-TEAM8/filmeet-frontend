import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: {
        id: null,
        nickname: '',
        role: '',
        username: '',
      },
      setUserInfo: (newUserInfo) =>
        set((state) => ({
          userInfo: { ...state.userInfo, ...newUserInfo },
        })),
      resetUserInfo: () =>
        set(() => ({
          userInfo: {
            id: null,
            nickname: '',
            role: '',
            username: '',
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
