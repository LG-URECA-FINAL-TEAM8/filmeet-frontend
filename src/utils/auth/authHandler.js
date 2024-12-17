export const handleAuthClick = (
  value,
  userData,
  navigate,
  signupMutate,
  loginMutate,
  refetchUserInfo,
  setCode,
  isLoggedIn,
  setLoggedIn,
  registerToken
) => {
  if (userData && value === '회원가입') {
    signupMutate(userData, {
      onSuccess: () => {
        setLoggedIn(false);
        navigate('/login');
      },
      onError: (error) => {
        if (error.code) {
          setCode(error.code);
        }
      },
    });
  }

  if (userData && value === '로그인') {
    loginMutate(userData, {
      onSuccess: async () => {
        if (isLoggedIn === false || isLoggedIn == null) {
          await refetchUserInfo();
          await registerToken();
          navigate('/genre');
        } else {
          await refetchUserInfo();
          await registerToken();
          navigate('/');
        }
      },
      onError: () => {},
    });
  }
};
