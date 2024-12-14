import { postRefresh } from "../users/user"; // 토큰 갱신 함수 가져오기
let accessToken = localStorage.getItem("accessToken");

export const createGameApi = async ({ title, totalRounds }) => {
    console.log("API 요청 데이터:", { title, totalRounds });
  // 최초 요청
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, totalRounds }),
  });
  
  console.log("응답 상태 코드:", response.status);
  if (!response.ok) {
    const errorMessage = await response.text();
    console.error("응답 에러 메시지:", errorMessage);
    throw new Error(`서버 에러: ${errorMessage}`);
  }
  
  // AccessToken 만료 처리
  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
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
    console.error("게임 생성에 실패:", response.statusText);
    throw new Error("게임 생성에 실패했습니다.");
  }

  return await response.json();
};
