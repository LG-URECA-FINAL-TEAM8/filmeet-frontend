import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserCollections } from "./collection";
import { deleteComment, getCommentsFromApi, postComment, updateComment } from "./collectioncomment";
import { cancelLikeCollection, getCollectionDetail, likeCollection } from "./collectiondetail";

export const useUserCollections = (userId, page = 0, size = 10) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userCollections", userId, page, size], // userId, page, size를 queryKey로 사용
    queryFn: () => getUserCollections(userId, page, size),
    enabled: !!userId, // userId가 존재할 때만 실행
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });

  return { data, isLoading, error };
};

// 컬렉션 상세 정보 가져오기 훅
export const useCollectionDetail = (collectionId) => {
  return useQuery({
    queryKey: ["collectionDetail", collectionId],
    queryFn: () => getCollectionDetail(collectionId),
    enabled: !!collectionId, // collectionId가 존재할 때만 실행
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });
};

// 좋아요 추가 훅
export const useLikeCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId) => likeCollection(collectionId),
    onSuccess: () => {
      console.log("좋아요 성공");
      queryClient.invalidateQueries(["collectionDetail"]); // 컬렉션 상세 쿼리 무효화
    },
    onError: (error) => {
      console.error("좋아요 요청 실패:", error);
    },
  });
};

// 좋아요 취소 훅
export const useCancelLikeCollection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (collectionId) => cancelLikeCollection(collectionId),
    onSuccess: () => {
      console.log("좋아요 취소 성공");
      queryClient.invalidateQueries(["collectionDetail"]); // 컬렉션 상세 쿼리 무효화
    },
    onError: (error) => {
      console.error("좋아요 취소 요청 실패:", error);
    },
  });
};

// 댓글 목록 가져오기 훅
export const useFetchComments = (collectionId) => {
  return useQuery({
    queryKey: ['comments', collectionId], // 쿼리 키는 배열 형식
    queryFn: () => getCommentsFromApi(collectionId), // 쿼리 함수는 인자 없이 호출
    enabled: !!collectionId, // collectionId가 존재할 때만 실행
    refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 비활성화
  });
};

// 댓글 추가 훅
export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ collectionId, commentContent }) =>
      postComment(collectionId, commentContent), // 댓글 작성 API 호출
    onSuccess: () => {
      // 성공 시 댓글 목록을 무효화하여 갱신
      queryClient.invalidateQueries(['comments']);
    },
  });
};

// 댓글 삭제 훅
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ collectionId, collectionCommentId }) =>
      deleteComment({ collectionId, collectionCommentId }), // 댓글 삭제 API 호출
    onSuccess: () => {
      console.log("댓글 삭제 성공: 댓글 목록 갱신 중...");
      queryClient.invalidateQueries(["comments"]); // 댓글 목록 갱신
    },
    onError: (error) => {
      console.error("댓글 삭제 중 오류:", error);
    },
  });
};

//댓글 수정
export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ collectionCommentId, commentContent }) =>
      updateComment({ collectionCommentId, commentContent }),
    onSuccess: () => {
      console.log("댓글 수정 성공: 댓글 목록 갱신 중...");
      queryClient.invalidateQueries(["comments"]); // 댓글 목록 갱신
    },
    onError: (error) => {
      console.error("댓글 수정 중 오류:", error);
    },
  });
};