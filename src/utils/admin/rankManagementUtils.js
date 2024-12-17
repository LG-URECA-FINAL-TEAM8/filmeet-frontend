export const handleSearch = (e, searchTerm, setSubmittedTerm, setCurrentPage) => {
  if (e.key === 'Enter') {
    if (!searchTerm.trim()) {
      setSubmittedTerm('');
      setCurrentPage(1);
      return;
    }
    setSubmittedTerm(searchTerm.trim());
    setCurrentPage(1);
  }
};
export const handlePageChange = (value, setCurrentPage) => {
  setCurrentPage(value);
};
  