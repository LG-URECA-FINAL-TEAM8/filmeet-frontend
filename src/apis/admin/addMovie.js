import { postRefresh } from "../users/user";

export const registerMovies = async (selectedMovies) => {
  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    throw new Error("로그인이 필요합니다.");
  }

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

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/movies/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

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

  if (!response.ok) {
    throw new Error("영화 등록 실패");
  }

  return response.json();
};