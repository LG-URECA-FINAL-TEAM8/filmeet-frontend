import { postRefresh } from "../users/user";

export const fetchReviewList = async ({ page, size, movieTitle = "", createdAt = "", sort = "asc" }) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
    }

    const url = `${import.meta.env.VITE_API_BASE_URL}/admin/reviews?page=${page}&size=${size}&movieTitle=${encodeURIComponent(movieTitle)}&createdAt=${createdAt}&sort=${sort}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (response.status === 401) {
        console.warn('AccessToken 만료됨. 갱신 시도 중...');
        const refreshToken = localStorage.getItem('refreshToken');

        // Refresh token 호출
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
