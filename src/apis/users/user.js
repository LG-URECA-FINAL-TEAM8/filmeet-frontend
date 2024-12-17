import useUserStore from '../../store/user/userStore';
let accessToken = localStorage.getItem('accessToken');

export const userInfoId = async ({ userId }) => {
  let accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    console.error('로그인이 필요합니다.');
    throw new Error('로그인이 필요합니다.');
  }

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}/info`, {
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

    // 갱신된 토큰으로 다시 요청 인터셉터를 사용해서 선언한 메서드를 재사용하는 방법 가능함
    accessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 다시 가져오기
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/${userId}/info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error('유저 정보를 불러오는 데 실패:', response.statusText);
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  const userInfoId = await response.json();

  return userInfoId;
};

export const getUserInfo = async () => {
  console.trace('getUserInfo 호출됨'); // 호출 스택을 추적할 수 있는 로그 추가
  const setUserInfo = useUserStore.getState().setUserInfo;

  let accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    console.error('로그인이 필요합니다.');
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
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청 인터셉터를 사용해서 선언한 메서드를 재사용하는 방법 가능함
    accessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 다시 가져오기
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/info`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error('유저 정보를 불러오는 데 실패:', response.statusText);
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  const userInfo = await response.json();

  setUserInfo({
    id: userInfo?.data.id,
    nickname: userInfo?.data.nickname,
    role: userInfo?.data.role,
    profileImage: userInfo?.data?.profileImage,
  });

  return userInfo;
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
