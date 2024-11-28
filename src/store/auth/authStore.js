import { create } from 'zustand';

const useAuthStore = create((set) => ({
  nickname: '',
  email: '',
  password: '',
  setNickname: (nickname) => set({ nickname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  resetAuth: () => set({ nickname: '', email: '', password: '' }),
}));

export default useAuthStore;
