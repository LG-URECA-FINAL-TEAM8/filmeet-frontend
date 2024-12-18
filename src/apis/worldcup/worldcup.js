import { postRefresh } from "../users/user"; // 토큰 갱신 함수 가져오기
let accessToken = localStorage.getItem("accessToken");

//게임 생성 API
export const createGameApi = async ({ title, totalRounds }) => {
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, totalRounds }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(`서버 에러: ${errorMessage}`);
  }
  
  // AccessToken 만료 처리
  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem("accessToken");
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, totalRounds }),
    });
  }

  if (!response.ok) {
    throw new Error("게임 생성에 실패했습니다.");
  }

  return await response.json();
};

// 게임 조회 API
export const getGameDetailApi = async (gameId) => {
    let accessToken = localStorage.getItem("accessToken");
  
    let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games/${gameId}/detail`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  
    // AccessToken 만료 처리
    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);
  
      // 갱신된 토큰으로 다시 요청
      accessToken = localStorage.getItem("accessToken");
      response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games/${gameId}/detail`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
    }
  
    if (!response.ok) {
      throw new Error(`게임 조회 실패: ${response.statusText}`);
    }
  
    return await response.json();
  };
  
  // 승자 선택 API
  export const selectWinnerApi = async (gameMatchId, selectedMovieId) => {
    let accessToken = localStorage.getItem("accessToken");
  
    let response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/games/matches/${gameMatchId}/select`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedMovieId }),
      }
    );
  
    // AccessToken 만료 처리
    if (response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      await postRefresh(refreshToken);
  
      // 갱신된 토큰으로 다시 요청
      accessToken = localStorage.getItem("accessToken");
      response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/games/matches/${gameMatchId}/select`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedMovieId }),
        }
      );
    }
  
    if (!response.ok) {
      throw new Error(`승자 선택 실패: ${response.statusText}`);
    }
  
    return await response.json();
  };

  // 추천 영화 가져오기
export const getRecommendMoviesApi = async (gameId) => {
  let accessToken = localStorage.getItem("accessToken");

  // 최초 요청
  let response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/games/${gameId}/recommendations`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  // AccessToken 만료 처리
  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem("accessToken");
    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/games/${gameId}/recommendations`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (!response.ok) {
    throw new Error(`추천 영화 조회 실패: ${response.statusText}`);
  }

  return await response.json();
};

// 게임 랭킹 조회 API
export const getGameRankingsApi = async () => {
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games/rankings`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  // AccessToken 만료 처리
  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    accessToken = localStorage.getItem("accessToken"); // 갱신된 토큰
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games/rankings`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  if (!response.ok) {
    throw new Error(`게임 랭킹 조회 실패: ${response.statusText}`);
  }

  return await response.json();
};
