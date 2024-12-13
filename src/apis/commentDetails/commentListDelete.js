import { postRefresh } from '../users/user'; 

export const deleteComment = async ({reviewId, commentId}) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}/comments/${commentId}`;

  const fetchWithToken = async (token) => {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      const errorText = await response.text();
      throw new Error(`댓글 삭제 실패: ${errorText}`);
    }

    return response; 
  };

  try {
    const accessToken = localStorage.getItem('accessToken');
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
      const accessToken = localStorage.getItem('accessToken');  // 갱신된 Access Token 가져오기

      // 갱신된 토큰으로 재시도
      return await fetchWithToken(accessToken);
    }
    console.error("댓글 삭제 중 오류 발생:", error);
    throw error;
  }
};
