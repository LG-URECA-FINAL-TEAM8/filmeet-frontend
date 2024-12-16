export const ratingTotal = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/total/ratings`);
  if (!response.ok) {
    throw new Error('전체 평가갯수 fetching 실패');
  }
  return response.json();
};
