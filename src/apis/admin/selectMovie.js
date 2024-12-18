import { postRefresh } from '../users/user';

let allMoviesCache = null;

export const fetchRegisteredMovies = async ({ page = 1, size = 7, query = '' }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다.');
  }

  if (!allMoviesCache) {
    const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies??page=${page}&size=100`;
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
        throw new Error('영화 목록 조회 실패');
      }

      allMoviesCache = await retryResponse.json();
    } else if (!response.ok) {
      throw new Error('영화 목록 조회 실패');
    } else {
      allMoviesCache = await response.json();
    }
  }

  return filterAndPaginateResults(allMoviesCache, query, page, size);
};

const filterAndPaginateResults = (data, query, page, size) => {
  let filteredContent = data.content;

  if (query) {
    filteredContent = filteredContent.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }

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
