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

export const addMyReview = async ({ content, movieId }) => {
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
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || '리뷰 등록 실패');
    }

    return await response.json();
  } catch (error) {
    console.error('리뷰 등록 중 실패:', error);
    throw error;
  }
};
