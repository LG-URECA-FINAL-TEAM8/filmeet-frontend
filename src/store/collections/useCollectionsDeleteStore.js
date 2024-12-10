import { create } from 'zustand';

const useCollectionsDeleteStore = create((set) => ({
  collections: [], // 초기 상태 추가
  isModalOpen: false,
  selectedCollection: null,

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setSelectedCollection: (collection) => {
    set({ selectedCollection: collection });
  },

  removeCollection: (collectionId) =>
    set((state) => ({
      collections: state.collections.filter((c) => c.id !== collectionId),
    })),
}));

export default useCollectionsDeleteStore;
