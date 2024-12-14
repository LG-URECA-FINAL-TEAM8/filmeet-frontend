export const handleLoginClick = (provider) => {
  window.location.href = `${import.meta.env.VITE_API_BASE_URL}/oauth2/authorization/${provider}`;
};
