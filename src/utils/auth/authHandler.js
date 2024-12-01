export const handleAuthClick = (value, userData, onClose, signupMutate, loginMutate) => {
  if (userData && value === '회원가입') {
    signupMutate(userData, {
      onSuccess: () => {
        alert('회원가입에 성공하셨습니다.');
        onClose();
      },
      onError: () => {
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      },
    });
  }
  if (userData && value === '로그인') {
    loginMutate(userData, {
      onSuccess: () => {
        alert('로그인에 성공하셨습니다.');
        onClose();
      },
      onError: () => {
        alert('로그인에 실패하셨습니다.');
      },
    });
  }
};
