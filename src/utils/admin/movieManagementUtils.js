export const handleSearch = (e, searchTerm, setSubmittedTerm, setCurrentPage) => {
  if (e.key === 'Enter') {
    setSubmittedTerm(searchTerm.trim());
    setCurrentPage(1);
  }
};
  
export const handlePageChange = (value, setCurrentPage) => {
  setCurrentPage(value);
};
  
export const handleEdit = (movie, setModalData, openModal) => {
  setModalData({
    id: movie.id,
    title: movie.title,
    likes: movie.likeCounts,
  });
  openModal();
};
  
export const handleDelete = (movie, deleteMovie) => {
  if (window.confirm(`"${movie.title}"을(를) 삭제하시겠습니까?`)) {
    deleteMovie(movie.id);
  }
};