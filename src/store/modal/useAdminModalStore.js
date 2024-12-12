import { create } from 'zustand';

const useAdminModalStore = create((set) => ({
  id: '',
  title: '',
  likes: '',
  imageUrl: '',
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setId: (id) => set({ id }),
  setTitle: (title) => set({ title }),
  setLikes: (likes) => set({ likes }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setModalData: ({ id, title, likes, imageUrl }) => set({ id, title, likes, imageUrl }),
}));

export default useAdminModalStore;
