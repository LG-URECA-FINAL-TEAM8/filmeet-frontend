import { postRefresh } from '../users/user';
let accessToken = localStorage.getItem('accessToken');

export const UpComingMovies = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/upcoming`);
  if (!response.ok) {
    throw new Error('개봉예정작 영화 데이터 패칭 실패');
  }
  return response.json();
};

export const BoxOfficeMovies = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/boxoffice`);
  if (!response.ok) {
    throw new Error('박스오피스 순위 영화 데이터 패칭 실패');
  }
  return response.json();
};

export const FillMeetTop = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/rankings`);
  if (!response.ok) {
    throw new Error('필밋 top 10 영화 데이터 패칭 실패');
  }
  return response.json();
};

//개인 추천영화
export const Recommendation = async () => {
  let response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/recommendation/users/18?size=20`,
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
    await postRefresh(refreshToken);

    // 갱신된 토큰으로 다시 요청
    accessToken = localStorage.getItem('accessToken'); // 갱신된 토큰 다시 가져오기
    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/movies/recommendation/users/18?size=20`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }

  if (!response.ok) {
    throw new Error('유저 정보를 불러오지 못했습니다.');
  }

  const recommendationMovie = await response.json();

  return recommendationMovie;
};
