import { postRefresh } from '../users/user'; // 토큰 갱신 함수

export const cancelLikeReview = async (reviewId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/likes/cancel/reviews/${reviewId}`;

  const fetchWithToken = async (token) => {
    const response = await fetch(url, {
      method: 'DELETE', // 좋아요 취소 요청
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized'); // 401 처리
      }
      const errorText = await response.text();
      throw new Error(`좋아요 취소 실패: ${errorText}`);
    }

    return response; // 응답 데이터 반환 (본문 없음)
  };

  try {
    const accessToken = localStorage.getItem('accessToken');
    return await fetchWithToken(accessToken);
  } catch (error) {
    if (error.message === 'Unauthorized') {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('Refresh token이 없습니다. 다시 로그인하세요.');
      }

      // AccessToken 갱신
      await postRefresh(refreshToken);
      const newAccessToken = localStorage.getItem('accessToken'); // 갱신된 Access Token 가져오기

      // 갱신된 토큰으로 재시도
      return await fetchWithToken(newAccessToken);
    }

    console.error('좋아요 취소 중 오류 발생:', error);
    throw error;
  }
};
