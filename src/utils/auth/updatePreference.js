export const upDatePreference = (preferenceData, preferenceMutate, navigate) => {
  const dataToSend = {
    ...preferenceData,
    genreId: preferenceData.genres,
  };
  if (dataToSend) {
    preferenceMutate(dataToSend, {
      onSuccess: () => {
        navigate('/login');
      },
      onError: (error) => {
        console.error('선호 정보 업데이트 실패:', error);
      },
    });
  }
};
