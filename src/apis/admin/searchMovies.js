import { postRefresh } from "../users/user";

export const fetchMovies = async (searchTerm) => {
  let accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('로그인이 필요합니다.');
  }


  let response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/admin/search/kmdb?&query=${(searchTerm)}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    await postRefresh(refreshToken);


    accessToken = localStorage.getItem('accessToken');
    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/admin/search/kmdb?&query=${(searchTerm)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }

  if (!response.ok) {
    throw new Error('영화 검색에 실패했습니다.');
  }

  return response.json();
};
