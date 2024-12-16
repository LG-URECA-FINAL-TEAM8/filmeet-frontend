import { postRefresh } from '../users/user';

let accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

// 댓글 세부 정보 가져오기 API
export const getCommentDetails = async ({ reviewId }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}`;
  const response = await fetchWithRetry(url, { method: 'GET' });
  const reviewDetails = await response.json();
  return reviewDetails.data || reviewDetails;
};

// 댓글 목록 가져오기 API
export const fetchComments = async ({ reviewId, page = 0, size = 10, sort = 'createdAt,asc' }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/comments?size=${size}&page=${page}&sort=${sort}`;
  const response = await fetchWithRetry(url, { method: 'GET' });
  const responseData = await response.json();
  return responseData.data.content || [];
};

// 리뷰 수정 API
export const updateReview = async ({ reviewId, content }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews`;
  const response = await fetchWithRetry(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reviewId, content }),
  });
  return response.json();
};

// 리뷰 좋아요 추가 API
export const likeReview = async (reviewId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/likes/reviews/${reviewId}`;
  const response = await fetchWithRetry(url, { method: 'POST' });
  return response.json();
};

// 리뷰 좋아요 취소 API
export const cancelLikeReview = async (reviewId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/likes/cancel/reviews/${reviewId}`;
  return fetchWithRetry(url, { method: 'DELETE' });
};

// 댓글 삭제 API
export const deleteComment = async ({ reviewId, commentId }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/comments/${commentId}`;
  return fetchWithRetry(url, { method: 'DELETE' });
};

// 댓글 수정 API
export const updateComment = async ({ reviewCommentId, content }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/comments`;
  const response = await fetchWithRetry(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reviewCommentId, content }),
  });
  return response.json();
};

// 댓글 생성 API
export const createComment = async ({ reviewId, content }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/comments`;
  const response = await fetchWithRetry(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reviewId, content }),
  });
  return response.json();
};

// 리뷰 삭제 API
export const deleteReview = async ({ reviewId, movieId }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/movies/${movieId}`;
  const response = await fetchWithRetry(url, { method: 'DELETE' });
  return response.ok ? { success: true } : null;
};

// 공통 fetchWithRetry 함수
if (!refreshToken) {
  throw new Error('Refresh token이 없습니다. 다시 로그인 후 시도해 주세요.');
}

const fetchWithRetry = async (url, options) => {
  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');

    await postRefresh(refreshToken); // 리프레시 토큰을 사용하여 액세스 토큰 갱신
    accessToken = localStorage.getItem('accessToken');

    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || '요청 실패');
  }

  return response;
};
