import { postRefresh } from "../../users/user";

const fetchWithToken = async (url, options) => {
  const accessToken = localStorage.getItem("accessToken");
  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    const newAccessToken = localStorage.getItem("accessToken");
    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error("API 호출 실패:", response.status, await response.text());
    throw new Error("평가 데이터를 불러오지 못했습니다.");
  }

  return response.json();
};

export const getMovieRatings = async (page = 0, size = 10, sort = "createdAt,asc") => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/users/movies/ratings?page=${page}&size=${size}&sort=${sort}`;
  console.log(`Fetching movie ratings: ${url}`);
  return await fetchWithToken(url, { method: "GET" });
};
