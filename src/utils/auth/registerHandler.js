export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return '유효한 이메일 주소를 입력해주세요';
  }
  return '';
};

export const validatePassword = (password) => {
  if (password.length >= 0 && password.length < 6) {
    return '비밀번호는 6자 이상 입력해주세요';
  }
  return '';
};
