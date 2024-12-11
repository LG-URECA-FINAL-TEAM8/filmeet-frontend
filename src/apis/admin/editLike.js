import { postRefresh } from "../users/user";

export const editLike = async (movieId, likeCount) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
    }

    const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies/${movieId}/likes`;

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likeCount }), // 좋아요 수를 요청 바디로 전송
    });

    if (response.status === 401) {
        console.warn('AccessToken 만료됨. 갱신 시도 중...');
        const refreshToken = localStorage.getItem('refreshToken');

        // Refresh token 호출
        await postRefresh(refreshToken);

        const newAccessToken = localStorage.getItem('accessToken');
        const retryResponse = await fetch(url, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${newAccessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ likeCount }),
        });

        if (!retryResponse.ok) {
            throw new Error('좋아요 수 수정 실패');
        }

        return retryResponse.json();
    }

    if (!response.ok) {
        throw new Error('좋아요 수 수정 실패');
    }

    return response.json();
};
