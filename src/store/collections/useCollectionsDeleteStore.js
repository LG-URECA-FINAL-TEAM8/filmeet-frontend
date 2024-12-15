import { create } from "zustand";
import useCollectionsStore from "./useCollectionsStore";
import { deleteCollection } from "../../apis/myPage/collection/collectiondetail";

const useCollectionsDeleteStore = create((set, get) => ({
  isModalOpen: false,
  selectedCollection: null,

  openModal: (collection) => {
    if (!collection) {
      return;
    }
    set({ isModalOpen: true, selectedCollection: collection });
  },

  closeModal: () => set({ isModalOpen: false, selectedCollection: null }),

  // 컬렉션 삭제
  removeCollection: async () => {
    const { selectedCollection } = get();
    if (!selectedCollection) {
      return;
    }
      const { collectionId, movies = [] } = selectedCollection; // movies 기본값 빈 배열
      const movieIds = movies.length > 0 ? movies.map((movie) => movie.movieId) : []; // 영화 ID 추출 또는 빈 배열

      await deleteCollection(collectionId, movieIds);

      // `useCollectionsStore` 상태 업데이트
      const collectionsStore = useCollectionsStore.getState();
       (collectionsStore.removeCollectionFromState) 
        collectionsStore.removeCollectionFromState(collectionId);

      set({ isModalOpen: false, selectedCollection: null });
    },
}));

export default useCollectionsDeleteStore;
