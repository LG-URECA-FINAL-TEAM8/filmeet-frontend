export const handleAuthClick = (
  value,
  userData,
  navigate,
  signupMutate,
  loginMutate,
  refetchUserInfo,
  setCode,
  isLoggedIn
) => {
  if (userData && value === '회원가입') {
    signupMutate(userData, {
      onSuccess: () => {
        navigate('/genre');
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
          navigate('/genre');
        } else {
          await refetchUserInfo();
          navigate('/');
        }
      },
      onError: () => {},
    });
  }
};
