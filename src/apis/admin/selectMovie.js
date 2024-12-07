import { postRefresh } from "../users/user";

export const fetchRegisteredMovies = async ({ page, size }) => {
    const accessToken = localStorage.getItem('accessToken');
  
    if (!accessToken) {
      throw new Error('로그인이 필요합니다.');
    }
  
    const response = await fetch(
      `http://localhost:8080/api/admin/movies?page=${page}&size=${size}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  
    if (response.status === 401) {
      console.warn('AccessToken 만료됨. 갱신 시도 중...');
      const refreshToken = localStorage.getItem('refreshToken');
  
      // Refresh token 호출
      await postRefresh(refreshToken);
  
      const newAccessToken = localStorage.getItem('accessToken');
      const retryResponse = await fetch(
        `http://localhost:8080/api/admin/movies?page=${page}&size=${size}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${newAccessToken}`,
          },
        }
      );
  
      if (!retryResponse.ok) {
        throw new Error('영화 목록 조회 실패');
      }
  
      return retryResponse.json();
    }
  
    if (!response.ok) {
      throw new Error('영화 목록 조회 실패');
    }
  
    return response.json();
  };