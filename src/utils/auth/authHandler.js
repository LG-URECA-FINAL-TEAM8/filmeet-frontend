export const handleAuthClick = (
  value,
  userData,
  navigate,
  signupMutate,
  loginMutate,
  queryClient,
  setLoggedIn,
  refetchUserInfo
) => {
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
        refetchUserInfo();
        navigate('/');
      },
      onError: () => {},
    });
  }
};
