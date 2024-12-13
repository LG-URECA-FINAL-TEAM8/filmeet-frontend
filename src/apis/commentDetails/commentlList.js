import { postRefresh } from '../users/user';
let accessToken = localStorage.getItem('accessToken');

export const createComment = async ({ reviewId, content }) => {
  console.log("Creating comment for review ID:", reviewId);

  // POST 요청을 보낼 API 엔드포인트
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/comments`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,  // Authorization 헤더에 accessToken 추가
      'Content-Type': 'application/json',  // JSON 데이터 전송
    },
    body: JSON.stringify({
      reviewId,  // 리뷰 ID
      content,   // 댓글 내용
    }),
  });

  // Access Token 만료된 경우 처리
  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('Refresh token이 없습니다. 로그인 후 다시 시도해 주세요.');
    }

    // AccessToken 갱신 요청
    await postRefresh(refreshToken);
    accessToken = localStorage.getItem('accessToken');  // 갱신된 토큰 가져오기

    // 갱신된 Access Token으로 재요청
    const retryResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,  // 갱신된 accessToken을 헤더에 담아 다시 요청
        'Content-Type': 'application/json',  // JSON 데이터 전송
      },
      body: JSON.stringify({
        reviewId,  // 리뷰 ID
        content,   // 댓글 내용
      }),
    });

    if (!retryResponse.ok) {
      const errorText = await retryResponse.text();
      console.error("Error response after retry:", errorText);
      throw new Error(`댓글을 생성할 수 없습니다. ${errorText}`);
    }

    return await retryResponse.json();  // 재요청 후 받은 응답 반환
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Error response:", errorText);
    throw new Error(`댓글을 생성할 수 없습니다. ${errorText}`);
  }

  const commentData = await response.json();
  console.log("Created Comment Data:", commentData);
  return commentData;  // 생성된 댓글 데이터 반환
};
