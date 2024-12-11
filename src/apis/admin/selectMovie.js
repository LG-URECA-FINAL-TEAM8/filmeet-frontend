import { postRefresh } from "../users/user";

let allMoviesCache = null; // 전체 데이터를 캐싱할 변수

export const fetchRegisteredMovies = async ({ page = 1, size = 7, query = '' }) => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error('로그인이 필요합니다.');
    }

    // 전체 데이터를 한 번만 불러오도록 처리
    if (!allMoviesCache) {
        console.log('전체 데이터를 불러옵니다...');
        const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies?page=1&size=10000`; // 모든 데이터를 불러오기 위해 큰 size 설정
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (response.status === 401) {
            console.warn('Access Token 만료됨. 갱신 시도 중...');
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
                throw new Error('영화 목록 조회 실패');
            }

            allMoviesCache = await retryResponse.json(); // 전체 데이터를 캐싱
        } else if (!response.ok) {
            throw new Error('영화 목록 조회 실패');
        } else {
            allMoviesCache = await response.json(); // 전체 데이터를 캐싱
        }
    }

    // 클라이언트에서 검색어 필터링
    return filterAndPaginateResults(allMoviesCache, query, page, size);
};

// 검색 및 페이지네이션 처리
const filterAndPaginateResults = (data, query, page, size) => {
    let filteredContent = data.content;

    // 검색어 필터링
    if (query) {
        filteredContent = filteredContent.filter((movie) =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    // 페이지네이션 처리
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + size;
    const paginatedContent = filteredContent.slice(startIndex, endIndex);

    return {
        ...data,
        content: paginatedContent,
        totalPages: Math.ceil(filteredContent.length / size),
        totalElements: filteredContent.length,
    };
};
