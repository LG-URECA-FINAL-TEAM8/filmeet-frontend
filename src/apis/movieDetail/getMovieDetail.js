import { postRefresh } from '../users/user';
let accessToken = localStorage.getItem('accessToken');
export const getMovieDetail = async (movieId) => {
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/detail/${movieId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem('accessToken');
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/detail/${movieId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  return await response.json();
};

export const getMovieComment = async (movieId) => {
  let response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/reviews/movies/${movieId}?page=0&size=10&sort=likeCounts,desc`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem('accessToken');
    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/reviews/movies/${movieId}?page=0&size=10&sort=likeCounts,desc`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }

  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  return await response.json();
};
