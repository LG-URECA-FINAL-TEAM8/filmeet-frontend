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
        console.warn('AccessToken 만료됨. 갱신 시도 중...');
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
        console.error('응답 에러:', await response.text());
        throw new Error('리뷰 목록 조회 실패');
    }
    return response.json();
};
