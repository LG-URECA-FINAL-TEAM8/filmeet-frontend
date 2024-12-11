import { create } from "zustand";
import useCollectionsStore from "./useCollectionsStore";
import { deleteCollection } from "../../apis/myPage/collection/collectiondetail";

const useCollectionsDeleteStore = create((set, get) => ({
  isModalOpen: false,
  selectedCollection: null,

  // 모달 열기
  openModal: (collection) => {
    if (!collection) {
      console.error("열려는 컬렉션 데이터가 없습니다.");
      return;
    }
    set({ isModalOpen: true, selectedCollection: collection });
  },

  // 모달 닫기
  closeModal: () => set({ isModalOpen: false, selectedCollection: null }),

  // 컬렉션 삭제
  removeCollection: async () => {
    const { selectedCollection } = get();
    if (!selectedCollection) {
      console.error("삭제할 컬렉션이 선택되지 않았습니다.");
      return;
    }

    try {
      const { collectionId, movies = [] } = selectedCollection; // movies 기본값 빈 배열
      const movieIds = movies.length > 0 ? movies.map((movie) => movie.movieId) : []; // 영화 ID 추출 또는 빈 배열

      console.log("삭제 요청 컬렉션 ID:", collectionId);
      console.log("삭제 요청 영화 IDs:", movieIds);

      // API 호출
      await deleteCollection(collectionId, movieIds);

      // `useCollectionsStore` 상태 업데이트
      const collectionsStore = useCollectionsStore.getState();
      if (collectionsStore.removeCollectionFromState) {
        collectionsStore.removeCollectionFromState(collectionId);
      } else {
        console.warn("removeCollectionFromState 함수가 없습니다.");
      }

      alert("컬렉션이 성공적으로 삭제되었습니다.");
      set({ isModalOpen: false, selectedCollection: null });
    } catch (error) {
      console.error("컬렉션 삭제 실패:", error);
      alert("컬렉션 삭제에 실패했습니다.");
    }
  },
}));

export default useCollectionsDeleteStore;
