export const registerMovies = async (selectedMovies) => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/movies/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ movies: selectedMovies }),
    });
  
    if (!response.ok) {
      throw new Error('영화 등록 실패');
    }
  
    return response.json();
  };