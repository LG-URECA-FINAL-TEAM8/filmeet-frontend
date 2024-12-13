import { create } from "zustand";

const useCommentDeleteStore = create((set) => ({
  isModalOpen: false, // 모달 열림 상태
  selectedComment: null, // 선택된 댓글 정보

  // 모달 열기
  openModal: (comment) => {
    if (!comment) {
      console.error("열려는 댓글 데이터가 없습니다.");
      return;
    }
    console.log("선택된 댓글:", comment);
    set({ isModalOpen: true, selectedComment: comment });
  },

  // 모달 닫기
  closeModal: () => set({ isModalOpen: false, selectedComment: null }),
}));

export default useCommentDeleteStore;
