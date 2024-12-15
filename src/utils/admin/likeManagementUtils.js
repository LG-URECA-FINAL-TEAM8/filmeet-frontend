export const handleBlind = (reviewId, blindReview) => {
  if (window.confirm('이 리뷰를 블라인드 처리하시겠습니까?')) {
    blindReview(reviewId);
  }
};
  
export const handleKeyDown = (e, searchTerm, setSubmittedTerm, setCurrentPage) => {
  if (e.key === 'Enter') {
    if (!searchTerm.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    setSubmittedTerm(searchTerm);
    setCurrentPage(1);
  }
};
  
export const handlePageChange = (value, setCurrentPage) => {
  setCurrentPage(value);
};