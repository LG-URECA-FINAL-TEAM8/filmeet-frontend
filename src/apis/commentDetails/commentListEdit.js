import { postRefresh } from '../users/user'; // 토큰 갱신을 위한 함수

export const updateComment = async ({ reviewCommentId, content }) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/reviews/comments`;

  const fetchWithToken = async (token) => {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reviewCommentId, // 수정할 댓글의 고유 ID
        content, // 수정된 댓글 내용
      }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized'); // 401 처리
      }
      const errorText = await response.text();
      throw new Error(`댓글 수정 실패: ${errorText}`);
    }

    return response.json(); // 응답 데이터 반환
  };

  try {
    // 첫 번째 요청 시도
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
      const accessToken = localStorage.getItem('accessToken'); // 갱신된 Access Token 가져오기

      // 갱신된 토큰으로 재시도
      return await fetchWithToken(accessToken);
    }
    // 다른 에러 처리
    console.error('댓글 수정 중 오류 발생:', error);
    throw error;
  }
};