export const UpComingMovies = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/upcoming`);
  if (!response.ok) {
    throw new Error('Movies data fetching failed');
  }
  return response.json();
};
