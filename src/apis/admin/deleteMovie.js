import { postRefresh } from '../users/user';

export const deleteMovie = async (movieId) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies/${movieId}`;
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다.');
  }
  
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);
    const newAccessToken = localStorage.getItem('accessToken');
    response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${newAccessToken}`,
      },
    });
  }

  if(!response.ok) {
    throw new Error('영화 삭제 실패');
  }
}