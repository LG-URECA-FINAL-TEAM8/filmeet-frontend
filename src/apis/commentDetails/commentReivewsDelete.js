import { postRefresh } from '../users/user';

export const deleteReview = async ({ reviewId, movieId }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/movies/${movieId}`;

  const fetchWithToken = async (token) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized'); // 토큰 만료 에러 처리
      }
      throw new Error(`리뷰 삭제 실패: ${response.statusText}`);
    }

    // 성공 시 반환 (삭제 API가 본문을 반환하지 않을 경우 null 반환)
    return response.ok ? { success: true } : null;
  };

  try {
    // 1차 시도: 기존 Access Token 사용
    const accessToken = localStorage.getItem('accessToken');
    return await fetchWithToken(accessToken);
  } catch (error) {
    if (error.message === 'Unauthorized') {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('Refresh token이 없습니다. 로그인 후 다시 시도해 주세요.');
      }

      // Access Token 갱신
      await postRefresh(refreshToken);
      const newAccessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 가져오기

      // 갱신된 토큰으로 재시도
      return await fetchWithToken(newAccessToken);
    }

    // 기타 에러 처리
    console.error('리뷰 삭제 중 오류 발생:', error);
    throw error;
  }
};