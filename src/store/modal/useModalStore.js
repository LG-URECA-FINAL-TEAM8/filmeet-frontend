import { create } from 'zustand';

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
  closeModal: () =>
    set({
      isModalOpen: false,
      modalTitle: '',
      modalMessage: '',
    }),
}));

export default useModalStore;
