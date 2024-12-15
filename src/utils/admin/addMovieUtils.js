export const handleSearch = (searchTerm, setSubmittedTerm, setCurrentPage) => {
  if (!searchTerm.trim()) {
    alert('검색어를 입력하세요.');
    return;
  }
  setSubmittedTerm('');
  setTimeout(() => setSubmittedTerm(searchTerm), 0);
  setCurrentPage(1);
};

export const handleSelectAll = (movies, isAllSelected, clearSelection, addMovie) => {
  if (isAllSelected) {
    clearSelection();
  } else {
    const movieIds = movies.map((movie) => movie.id);
    movieIds.forEach((id) => addMovie(id));
  }
};

export const handleCheckboxChange = (movieId, selectedMovies, addMovie, removeMovie) => {
  if (selectedMovies.includes(movieId)) {
    removeMovie(movieId);
  } else {
    addMovie(movieId);
  }
};

export const handleRegister = (movies, selectedMovies, registerMovies) => {
  const selectedMovieData = movies
    .filter((movie) => selectedMovies.includes(movie.id))
    .map((movie) => ({
      title: movie.title,
      titleEng: movie.titleEng || '',
      repRlsDate: movie.repRlsDate,
      staffs: movie.staffs || [],
      nation: movie.nation || '',
      plots: movie.plots || [],
      runtime: movie.runtime || '',
      rating: movie.rating || '',
      genre: movie.genre || '',
      posters: movie.posters || [],
    }));
  
  registerMovies(selectedMovieData);
};