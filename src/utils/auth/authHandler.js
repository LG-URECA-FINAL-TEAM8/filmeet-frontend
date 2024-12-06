export const handleAuthClick = (
  value,
  userData,
  navigate,
  signupMutate,
  loginMutate,
  setLoggedIn,
  refetchUserInfo,
  setCode
) => {
  if (userData && value === '회원가입') {
    signupMutate(userData, {
      onSuccess: () => {
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
      onSuccess: () => {
        setLoggedIn(true);
        refetchUserInfo();
        navigate('/');
      },
      onError: () => {},
    });
  }
};
