import { postRefresh } from "../users/user";

export const movieRecommend = async (movieIds) => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies/recommendation`;

  const payload = movieIds; 

  let response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    accessToken = localStorage.getItem("accessToken");
    response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
  }

  if (!response.ok) {
    const errorResponse = await response.text();
    console.error("서버 오류:", errorResponse);
    throw new Error("추천 영화 업데이트 실패");
  }

  return response.json();
};