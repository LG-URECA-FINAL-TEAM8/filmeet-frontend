import { create } from "zustand";

export const useLikesStore = create((set) => ({
  likes: {}, // 좋아요 상태 저장
  isLoading: false, // 로딩 상태
  error: null, // 에러 상태

  // 상태 초기화 메서드
  initializeLikes: async (reviewId) => {
    if (!reviewId) {
      console.warn("유효하지 않은 리뷰 ID입니다.");
      return;
    }

    set({ isLoading: true, error: null }); // 요청 시작 시 로딩 및 에러 상태 초기화

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}`);
      if (!response.ok) throw new Error("리뷰 데이터 요청 실패");

      const data = await response.json();
      if (data.code === 200) {
        const { reviewId, likeCounts, isLiked } = data.data;
        set((state) => ({
          likes: {
            ...state.likes,
            [reviewId]: { count: likeCounts, isLiked, isLoading: false },
          },
          isLoading: false, // 요청 성공 시 로딩 상태 해제
        }));
      }
    } catch (error) {
      console.error("리뷰 상태 초기화 실패:", error);
      set({ isLoading: false, error: error.message }); // 에러 발생 시 상태 업데이트
    }
  },

  // 좋아요 상태 토글
  toggleLikeStatus: (reviewId, isLiked) =>
    set((state) => {
      const updatedLikes = { ...state.likes };
      if (updatedLikes[reviewId]) {
        updatedLikes[reviewId].isLiked = isLiked;
      }
      return { likes: updatedLikes };
    }),
}));