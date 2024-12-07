import { create } from 'zustand';

const useAdminModalStore = create((set) => ({
  isOpen: false,
  modalData: null,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setModalData: (data) => set({ modalData: data }),
}));

export default useAdminModalStore;