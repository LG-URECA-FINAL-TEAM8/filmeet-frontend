import { postRefresh } from '../users/user';
let accessToken = localStorage.getItem('accessToken');

export const genreMovies = async ({ genre }) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/search/genre?genreTypes=${genre}&page=0&size=10`
  );
  if (!response.ok) {
    throw new Error('개봉예정작 영화 데이터 패칭 실패');
  }
  return response.json();
};

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
export const Recommendation = async (userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/recommendation/users/${userId}?size=100`
  );
  if (!response.ok) {
    throw new Error('개인 추천 영화 데이터 패칭실패');
  }
  return response.json();
};

export const RandomGenre = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/random?page=0&size=10&sort=likeCounts,desc`
  );
  if (!response.ok) {
    throw new Error('랜덤 장르영화 데이터 패칭실패');
  }
  return response.json();
};

export const fetchEvaluation = async ({ pageParam = 0 }) => {
  let response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/rating?page=${pageParam}&size=10`,
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
    accessToken = localStorage.getItem('accessToken');
    response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/movies/rating?page=${pageParam}&size=10`,
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

  return await response.json();
};
export const AdminRanking = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/admin-rankings`);
  if (!response.ok) {
    throw new Error('어드민 추천 영화 패칭실패');
  }
  return response.json();
};
