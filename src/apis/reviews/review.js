export const HotReview = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/reviews/users?filter=trending_reviews&page=0&size=10&sort=createdAt,desc`
  );
  if (!response.ok) {
    throw new Error('지금 뜨는 커멘트 데이터 패칭 실패');
  }
  return response.json();
};
