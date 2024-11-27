const SignUp = async ({ username, password, nickname }) => {
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

export default SignUp;
