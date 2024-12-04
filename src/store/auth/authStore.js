import { create } from 'zustand';

const useAuthStore = create((set) => ({
  nickname: '',
  email: '',
  password: '',
  setNickname: (nickname) => set({ nickname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  resetAuthData: () =>
    set({
      nickname: '',
      email: '',
      password: '',
    }),
}));

export default useAuthStore;
