import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCommentDetails } from './commentDetails';
import { createComment } from './commentlList';
import { fetchComments } from './commentSelect';
import { deleteComment } from './commentDelete';
import { updateReview } from './commentEdit';  // named import로 수정



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
  keepPreviousData: true,
    });
  };

  export const useDeleteComment = () => {
    const queryClient = useQueryClient();
  
    return useMutation(deleteComment, {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries(['deletecomments', variables.reviewId]);  // 삭제 후 댓글 목록 갱신
      },
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

