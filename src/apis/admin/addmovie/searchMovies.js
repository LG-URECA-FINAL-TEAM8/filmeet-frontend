export const fetchMovies = async (searchTerm) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/search/kmdb?term=${encodeURIComponent(searchTerm)}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
  
    return response.json();
  };