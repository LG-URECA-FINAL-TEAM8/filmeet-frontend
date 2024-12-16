import { postRefresh } from '../users/user';
export const getNotification = async () => {
  let accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    console.error('로그인이 필요합니다.');
    throw new Error('로그인이 필요합니다.');
  }

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/notifications?page=0&size=20`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // AccessToken 만료 처리
  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 다시 가져오기
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/notifications?page=0&size=20`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error('알림 정보를 불러오는 데 실패:', response.statusText);
    throw new Error('알림 정보를 불러오지 못했습니다.');
  }

  const notificationData = await response.json();
  return notificationData;
};
