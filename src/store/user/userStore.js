import { create } from 'zustand';

const useUserStore = create((set) => ({
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
}));

export default useUserStore;
