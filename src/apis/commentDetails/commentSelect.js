import { postRefresh } from '../users/user';

let accessToken = localStorage.getItem('accessToken');

export const fetchComments = async ({ reviewId, page = 0, size = 10, sort = "createdAt,asc" }) => {
    console.log("Fetching comments for review ID:", reviewId);
  
    const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/comments?size=${size}&page=${page}&sort=${sort}`;
  
    const fetchWithToken = async (token) => {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized'); // 401 처리
        }
        const errorText = await response.text();
        throw new Error(`댓글 데이터를 가져올 수 없습니다: ${errorText}`);
      }
  
      const responseData = await response.json(); // 응답 데이터를 JSON으로 파싱
      return responseData.data.content || []; // 댓글 데이터 배열만 반환
    };
  
    try {
      // 첫 번째 요청 시도
      return await fetchWithToken(accessToken);
    } catch (error) {
      if (error.message === 'Unauthorized') {
        console.warn('AccessToken 만료됨. 갱신 시도 중...');
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
          throw new Error('Refresh token이 없습니다. 로그인 후 다시 시도해 주세요.');
        }
  
        // AccessToken 갱신
        await postRefresh(refreshToken);
        accessToken = localStorage.getItem('accessToken'); // 갱신된 Access Token 가져오기
  
        // 갱신된 토큰으로 재시도
        return await fetchWithToken(accessToken);
      }
  
      // 다른 에러 처리
      console.error("댓글 데이터를 가져오는 중 오류 발생:", error);
      throw error;
    }
  };