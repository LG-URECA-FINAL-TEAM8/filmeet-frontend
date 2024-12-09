export const upDatePreference = (
  preferenceData,
  preferenceMutate,
  navigate,
  isLoggedIn,
  setLoggedIn
) => {
  const dataToSend = {
    ...preferenceData,
    genreId: preferenceData.genres,
  };
  if (dataToSend) {
    preferenceMutate(dataToSend, {
      onSuccess: () => {
        setLoggedIn(true);
        navigate('/');
      },
      onError: (error) => {
        console.error('선호 정보 업데이트 실패:', error);
      },
    });
  }
};
