export const handleAuthClick = (
  value,
  userData,
  navigate,
  setLoggedIn,
  signupMutate,
  loginMutate
) => {
  return new Promise((resolve, reject) => {
    if (userData && value === '회원가입') {
      signupMutate(userData, {
        onSuccess: () => {
          navigate('/login');
        },
        onError: () => {},
      });
    }

    if (userData && value === '로그인') {
      loginMutate(userData, {
        onSuccess: () => {
          setLoggedIn(true);
          navigate('/');
          resolve(true);
        },
        onError: () => {
          reject(false);
        },
      });
    }
  });
};
