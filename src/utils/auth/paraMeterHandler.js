export const paraMeterHandler = (search) => {
  const queryParams = new URLSearchParams(search);
  const accessToken = queryParams.get('accessToken');
  const refreshToken = queryParams.get('refreshToken');

  if (accessToken && refreshToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }
};
