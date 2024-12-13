import { postRefresh } from "../users/user";

export const reviewBlind = async (reviewId) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
    }

    const url = `${import.meta.env.VITE_API_BASE_URL}/admin/reviews/${reviewId}/blind`;

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 401) {
        console.warn('AccessToken 만료됨. 갱신 시도 중...');
        const refreshToken = localStorage.getItem('refreshToken');

        await postRefresh(refreshToken);

        const newAccessToken = localStorage.getItem('accessToken');
        const retryResponse = await fetch(url, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!retryResponse.ok) {
            throw new Error('리뷰 블라인드 처리 실패');
        }
        return retryResponse.json();
    }
    if (!response.ok) {
        throw new Error('리뷰 블라인드 처리 실패');
    }
    return response.json();
};