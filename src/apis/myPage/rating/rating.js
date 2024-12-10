import { postRefresh } from "../../users/user";

let accessToken = localStorage.getItem("accessToken");

export const getMovieRatings = async (page = 0, size = 10, sort = "createdAt,asc") => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/users/movies/ratings?page=${page}&size=${size}&sort=${sort}`;
  console.log(`Fetching movie ratings: ${url}`);
  console.log(`Access Token: ${accessToken}`);

  let response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 401) {
    console.warn("AccessToken 만료됨. 갱신 시도 중...");
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    // 갱신된 토큰 다시 가져오기
    accessToken = localStorage.getItem("accessToken");
    console.log(`New Access Token: ${accessToken}`);

    response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  if (!response.ok) {
    console.error("API 호출 실패:", response.status, await response.text());
    throw new Error("평가 데이터를 불러오지 못했습니다.");
  }

  const ratingsData = await response.json();
  console.log("Fetched Ratings Data:", ratingsData);

  return ratingsData;
};
