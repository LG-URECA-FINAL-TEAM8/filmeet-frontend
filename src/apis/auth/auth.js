import { postRefresh } from '../users/user';
export const SignUp = async ({ username, password, nickname }) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      nickname,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();

    const error = new Error(errorData.message || '회원가입 실패');
    error.code = errorData.code;
    throw error;
  }

  return response.json();
};

export const Login = async ({ username, password }) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error('로그인 실패');
  }

  const result = await response.json();
  const { accessToken, refreshToken } = result.data;
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  return result;
};

export const Preference = async ({ mbti, age, genreId }) => {
  try {
    let accessToken = localStorage.getItem('accessToken');
    let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/update/preference`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        mbti,
        age,
        genreId,
      }),
    });

    // 401 (Unauthorized) 상태일 경우 토큰 갱신 시도
    if (response.status === 401) {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');
      await postRefresh(refreshToken);

      accessToken = localStorage.getItem('accessToken');
      response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users/update/preference`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          mbti,
          age,
          genreId,
        }),
      });
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || '선호장르 업데이트 실패');
    }

    return await response.json();
  } catch (error) {
    console.error('선호장르 업데이트 중 오류:', error);
    throw error;
  }
};
