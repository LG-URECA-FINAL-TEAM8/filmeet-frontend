export const createWorldcupGame = (mutate, setGameId, setGameStarted, setCurrentRound, navigate, route) => {
    mutate(
      { title: '2024 인기 영화 이상형 월드컵', totalRounds: 16 },
      {
        onSuccess: (response) => {
          setGameId(response.data);
          setGameStarted();
          setCurrentRound(16); // 초기 라운드 설정
          navigate(route); // 페이지 이동
        },
      }
    );
  };
  