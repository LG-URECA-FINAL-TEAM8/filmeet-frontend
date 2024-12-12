import { postRefresh } from '../users/user';

let accessToken = localStorage.getItem('accessToken');

export const getCommentDetails = async ({ reviewId }) => {
  console.log("Requesting comment details for ID:", reviewId);  

  let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,  
    },
  });

  if (response.status === 401) {
    console.warn('AccessToken 만료됨. 갱신 시도 중...');
    const refreshToken = localStorage.getItem('refreshToken');  
    if (!refreshToken) {
      throw new Error('Refresh token이 없습니다. 로그인 후 다시 시도해 주세요.');
    }

    // accessToken 갱신
    await postRefresh(refreshToken);
    accessToken = localStorage.getItem('accessToken');  

    // 갱신된 accessToken으로 재요청
    response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/reviews/${reviewId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    });
  }

  if (!response.ok) {
    const errorText = await response.text();  
    console.error("Error response:", errorText);
    throw new Error(`리뷰 정보를 불러오지 못했습니다. ${errorText}`);
  }

  const reviewDetails = await response.json();
  
  console.log("API Response Data:", reviewDetails); 
  return reviewDetails.data || reviewDetails;  
};
