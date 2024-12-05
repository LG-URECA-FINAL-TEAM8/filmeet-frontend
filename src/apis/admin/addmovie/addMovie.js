import { postRefresh } from "../../users/user";

export const registerMovies = async (selectedMovies) => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

  // 요청 데이터 준비
  const payload = selectedMovies.map((movie) => ({
    title: movie.title,
    titleEng: movie.titleEng || "",
    repRlsDate: movie.repRlsDate || "",
    staffs: movie.staffs || [],
    nation: movie.nation || "",
    plots: movie.plots || [],
    runtime: movie.runtime || "",
    rating: movie.rating || "",
    genre: movie.genre || "",
    posters: movie.posters || [],
  }));

  // 첫 번째 요청
  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/movies/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  // 401 Unauthorized 처리
  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem("accessToken");
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/movies/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });
  }

  // 최종 응답 처리
  if (!response.ok) {
    console.error("서버 응답:", await response.text());
    throw new Error("영화 등록 실패");
  }

  return response.json();
};