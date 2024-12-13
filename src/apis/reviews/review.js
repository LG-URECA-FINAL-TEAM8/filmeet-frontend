import { postRefresh } from '../users/user';

export const HotReview = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/reviews/users?filter=trending_reviews&page=0&size=10&sort=createdAt,desc`
  );
  if (!response.ok) {
    throw new Error('지금 뜨는 커멘트 데이터 패칭 실패');
  }
  return response.json();
};

export const addMyReview = async ({ content, movieId, reviewId }) => {
  try {
    let accessToken = localStorage.getItem('accessToken');
    let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        movieId,
        content,
      }),
    });

    const responseData = await response.json();

    if (responseData.code === 10201) {
      console.warn('이미 리뷰를 작성했습니다. PATCH 요청으로 업데이트 시도...');
      response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          reviewId,
          content,
        }),
      });

      const patchResponseData = await response.json();
      if (patchResponseData.code === 10204) {
        throw new Error(patchResponseData.message || '리뷰 업데이트 실패');
      }

      return patchResponseData;
    }

    // 401 (Unauthorized) 상태일 경우 토큰 갱신 시도
    if (response.status === 401) {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');
      await postRefresh(refreshToken);

      accessToken = localStorage.getItem('accessToken');
      response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          movieId,
          content,
        }),
      });

      // 재시도 후 응답 데이터 확인
      const retryResponseData = await response.json();

      if (!response.ok) {
        throw new Error(retryResponseData.message || '리뷰 등록 실패');
      }

      return retryResponseData;
    }

    // 성공적인 응답 처리
    if (!response.ok) {
      throw new Error(responseData.message || '리뷰 등록 실패');
    }

    return responseData;
  } catch (error) {
    console.error('리뷰 등록 중 실패:', error);
    throw error;
  }
};
