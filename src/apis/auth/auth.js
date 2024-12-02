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
    throw new Error('회원가입 실패');
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
