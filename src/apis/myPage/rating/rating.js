import { postRefresh } from '../../users/user';

let accessToken = localStorage.getItem('accessToken');

export const getMovieRatings = async (userId, page = 0, size = 10, sort = 'createdAt,asc') => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/users/${userId}/movies/ratings?page=${page}&size=${size}&sort=${sort}`;

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem('accessToken');

    response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error('평가 데이터를 불러오지 못했습니다.');
  }

  const ratingsData = await response.json();

  return ratingsData;
};
