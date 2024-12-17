import { postRefresh } from '../users/user';

export const addFollow = async ({ userId }) => {
  let accessToken = localStorage.getItem('accessToken');

  try {
    let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/follows/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // 401 (Unauthorized) 상태일 경우 토큰 갱신 시도
    if (response.status === 401) {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');

      await postRefresh(refreshToken);

      accessToken = localStorage.getItem('accessToken');
      response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/follows/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || '팔로우 실패');
    }

    return await response.json();
  } catch (error) {
    console.error('팔로우 중 오류 발생:', error);
    throw error;
  }
};
