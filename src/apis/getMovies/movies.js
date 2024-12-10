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
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/movies/recommendation/users/18?size=20`
  );
  if (!response.ok) {
    throw new Error('개인 추천 영화 데이터 패칭실패');
  }
  return response.json();
};

export const RandomGenre = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/random?page=0&size=10`);
  if (!response.ok) {
    throw new Error('랜덤 장르영화 데이터 패칭실패');
  }
  return response.json();
};
