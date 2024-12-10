import { postRefresh } from "../../users/user";

const fetchWithToken = async (url, options) => {
  const accessToken = localStorage.getItem('accessToken');
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // 토큰 만료 시 처리
  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    const newAccessToken = localStorage.getItem('accessToken');
    return await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    });
  }

  return response;
};

export const getFollowers = async (userId, page = 0, size = 20) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/follows/followers/${userId}?page=${page}&size=${size}`;
  console.log(`Fetching followers: ${url}`);

  const response = await fetchWithToken(url, { method: 'GET' });

  if (!response.ok) {
    console.error('Error fetching followers:', response.status, await response.text());
    throw new Error('팔로워 목록을 불러오지 못했습니다.');
  }

  return await response.json();
};

export const getFollowings = async (userId, page = 0, size = 20) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/follows/followings/${userId}?page=${page}&size=${size}`;
  console.log(`Fetching followings: ${url}`);

  const response = await fetchWithToken(url, { method: 'GET' });

  if (!response.ok) {
    console.error('Error fetching followings:', response.status, await response.text());
    throw new Error('팔로잉 목록을 불러오지 못했습니다.');
  }

  return await response.json();
};
