import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  cancelLikeReview,
  createComment,
  deleteComment,
  deleteReview,
  fetchComments,
  getCommentDetails,
  likeReview,
  updateComment,
  updateReview,
} from './commentDetails';
import useCommentStore from '../../store/modal/useCommentStore';

// 리뷰 수정 훅
export const useEditReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
      useCommentStore.getState().closeModal();
    },
    onError: (error) => {
      console.error('리뷰 수정 중 오류 발생:', error);
    },
  });
};

// 리뷰 세부 정보 조회 훅
export const useCommentDetails = ({ reviewId }) => {
  return useQuery({
    queryKey: ['commentDetails', { reviewId }],
    queryFn: () => getCommentDetails({ reviewId }),
    enabled: !!reviewId,
    refetchOnWindowFocus: false,
  });
};

export const useCancelLikeReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelLikeReview,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['reviews']);
      queryClient.setQueryData(['reviews', variables], (oldData) => {
        if (!oldData) return oldData;
        const updatedData = { ...oldData };
        updatedData.isLiked = false;
        updatedData.likeCounts -= 1;
        return updatedData;
      });
    },
    onError: (error) => {
      console.error('좋아요 취소 중 오류 발생:', error);
    },
  });
};

// 리뷰 좋아요 훅
export const useLikeReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeReview,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['reviews']);
      queryClient.setQueryData(['reviews', variables], (oldData) => {
        if (!oldData) return oldData;
        const updatedData = { ...oldData };
        updatedData.isLiked = true;
        updatedData.likeCounts += 1;
        return updatedData;
      });
    },
    onError: (error) => {
      console.error('좋아요 중 오류 발생:', error);
    },
  });
};

// 리뷰 삭제 훅
export const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
    },
    onError: (error) => {
      console.error('리뷰 삭제 중 오류 발생:', error);
    },
  });
};
// 댓글 삭제 훅
export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['comments', variables.reviewId]);
    },
    onError: (error) => {
      console.error('댓글 삭제 중 오류 발생:', error);
    },
  });
};
// 댓글 수정 훅
export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(['comments', variables.reviewCommentId]);
      useCommentStore.getState().closeModal();
    },
    onError: (error) => {
      console.error('댓글 수정 중 오류 발생:', error);
    },
  });
};

// 댓글 생성 훅
export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(['createComments']);
      useCommentStore.getState().closeModal();
    },
    onError: (error) => {
      console.error('댓글 생성 중 오류 발생:', error);
    },
  });
};

// 댓글 목록 조회 훅
export const useFetchComments = ({ reviewId, page = 0, size = 10, sort = 'createdAt,asc' }) => {
  return useQuery({
    queryKey: ['createComments', reviewId, page, size, sort],
    queryFn: () => fetchComments({ reviewId, page, size, sort }),
    enabled: !!reviewId,
  });
};
