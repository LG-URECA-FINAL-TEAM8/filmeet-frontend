import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCommentDetails } from './commentDetails';
import { createComment } from './commentlList';
import { fetchComments } from './commentSelect';
import { updateReview } from './commentEdit';  
import { deleteComment } from './commentListDelete';
import { updateComment } from './commentListEdit'
import { deleteReview } from './commentReivewsDelete';
import { likeReview } from './commentLike';
import { cancelLikeReview } from './commentLikeCancel';


export const useCancelLikeReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelLikeReview, // 리뷰에서 좋아요 취소하는 함수 호출
    onSuccess: () => {
      console.log('좋아요 취소 성공');
      queryClient.invalidateQueries(['reviews']); // 리뷰 목록 데이터 새로고침
    },
    onError: (error) => {
      console.error('좋아요 취소 중 오류 발생:', error);
    },
  });
};




export const useLikeReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likeReview, // 리뷰에 좋아요 추가하는 함수 호출
    onSuccess: () => {
      console.log('좋아요 성공');
      queryClient.invalidateQueries(['reviews']); // 리뷰 목록 데이터 새로고침
    },
    onError: (error) => {
      console.error('좋아요 중 오류 발생:', error);
    },
  });
};

export const useDeleteReview = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteReview, // deleteReview 함수 직접 할당
    onSuccess: (data, variables) => {
      console.log("리뷰 삭제 성공:", data);
      queryClient.invalidateQueries(['reviews']);
    },
    onError: (error) => {
      console.error("리뷰 삭제 중 오류 발생:", error);
    },
  });
};


export const useDeleteComment = (reviewId,commnetId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,  // deleteComment 함수 호출
    onSuccess: (data, variables) => {
      console.log('댓글이 성공적으로 삭제되었습니다:', data);
      queryClient.invalidateQueries(['comments', variables.reviewId]);
    },
    onError: (error) => {
      console.error('댓글 삭제 중 오류 발생:', error);
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment, // updateComment 함수 호출
    onSuccess: (data, variables) => {
      console.log('댓글이 성공적으로 수정되었습니다:', data);
      // 댓글 목록을 최신화
      queryClient.invalidateQueries(['comments', variables.reviewCommentId]); // reviewCommentId 사용
    },
    onError: (error) => {
      console.error('댓글 수정 중 오류 발생:', error);
    },
  });
};


export const useCreateComment = () => {
  const queryClient = useQueryClient(); 
  return useMutation({
    mutationFn: createComment,  
    onSuccess: (data) => {
      console.log('댓글이 성공적으로 생성되었습니다:', data);
      queryClient.invalidateQueries(['createComments']); 
    },
    onError: (error) => {
      console.error('댓글 생성 중 오류 발생:', error);
    },
  });
};


  export const useFetchComments = ({ reviewId, page = 0, size = 10, sort = "createdAt,asc" }) => {
    return useQuery({
      queryKey: ['createComments', reviewId, page, size, sort],  
  queryFn: () => fetchComments({ reviewId, page, size, sort }),
  enabled: !!reviewId,
    });
  };



  export const useEditReview = () => {
    const queryClient = useQueryClient();  // queryClient 가져오기
  
    return useMutation({
      mutationFn: updateReview,  // mutationFn에 updateReview 함수 전달
      onSuccess: (data, variables) => {
        // 성공 후, 댓글 데이터 갱신을 위해 캐시 무효화
        queryClient.invalidateQueries(['commentDetails', { reviewId: variables.reviewId }]);
        console.log("리뷰 수정 성공:", data);
      },
      onError: (error) => {
        console.error("리뷰 수정 중 오류 발생:", error);
      },
    });
  };

  export const useCommentDetails = ({ reviewId }) => {
  return useQuery({
    queryKey: ['commentDetails', { reviewId }],
    queryFn: () => getCommentDetails({ reviewId }),
    enabled: !!reviewId,
    refetchOnWindowFocus: false,
  }); 
};

