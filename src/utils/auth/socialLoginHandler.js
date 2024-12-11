export const handleNaverLoginClick = () => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization/naver`;
};
