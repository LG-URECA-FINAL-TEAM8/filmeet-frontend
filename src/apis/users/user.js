let accessToken = localStorage.getItem('accessToken');

export const getUserInfo = async () => {
  if (!accessToken) {
    throw new Error('로그인이 필요합니다.');
  }

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/info`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // AccessToken 만료 처리
  if (response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  return response.json();
};

// 토큰 갱신 함수
export const postRefresh = async (refreshToken) => {
  if (!refreshToken) {
    throw new Error('갱신 토큰이 없습니다. 다시 로그인하세요.');
  }

  const refreshResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!refreshResponse.ok) {
    throw new Error('토큰 갱신에 실패했습니다. 다시 로그인하세요.');
  }

  const refreshData = await refreshResponse.json();
  accessToken = refreshData.data.accessToken;
  localStorage.setItem('accessToken', accessToken);
};
