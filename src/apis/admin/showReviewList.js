import { postRefresh } from "../users/user";

export const fetchReviewList = async ({ movieTitle = "", sort = "asc", size = 7, page = 0  }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다.');
}

  const url = `${import.meta.env.VITE_API_BASE_URL}/admin/reviews?movieTitle=${encodeURIComponent(
    typeof movieTitle === "string" ? movieTitle : ""
  )}&sort=${sort}&size=${size}&page=${page}`;

  const response = await fetch(url, {
    method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');

      await postRefresh(refreshToken);

      const newAccessToken = localStorage.getItem('accessToken');
      const retryResponse = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });
      if (!retryResponse.ok) {
        throw new Error('리뷰 목록 조회 실패');
      }
      return retryResponse.json();
    }

  if (!response.ok) {
    throw new Error('리뷰 목록 조회 실패');
  }
  return response.json();
};
