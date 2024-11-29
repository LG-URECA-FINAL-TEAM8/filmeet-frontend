import { create } from 'zustand';
import useAuthStore from '../auth/authStore';

const useModalStore = create((set) => ({
  isModalOpen: false,
  modalTitle: '',
  modalMessage: '',
  openModal: (title, message) =>
    set({
      isModalOpen: true,
      modalTitle: title,
      modalMessage: message,
    }),
  closeModal: () => {
    useAuthStore.getState().resetAuthData();
    set({
      isModalOpen: false,
      modalTitle: '',
      modalMessage: '',
    });
  },
}));

export default useModalStore;
