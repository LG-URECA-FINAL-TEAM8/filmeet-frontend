import { postRefresh } from '../users/user';
let accessToken = localStorage.getItem('accessToken');

export const getUserFollowCount = async (userId) => {
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/follows/count/${userId}`, {
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
    accessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 다시 가져오기
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/follows/count/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  const userNetWorkInfo = await response.json();

  return userNetWorkInfo;
};
