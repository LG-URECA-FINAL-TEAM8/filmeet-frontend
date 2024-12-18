import { postRefresh } from "../users/user";

export const editMovie = async ({ movieId, title, image, likeCount }) => {

  let accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
      throw new Error('로그인이 필요합니다.');
  }

  const url = `${import.meta.env.VITE_API_BASE_URL}/admin/movies/${movieId}`;

  let response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title.trim(),
      posterUrl: image || '',
      likeCounts: parseInt(likeCount, 10),
    }),
  });
  
  if (response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    await postRefresh(refreshToken);

    accessToken = localStorage.getItem("accessToken");
    response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title.trim(),
        posterUrl: image || '',
        likeCounts: parseInt(likeCount, 10),
      }),
    });
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`영화 정보 수정 실패: ${errorText}`);
  }

  return response.json();
};

