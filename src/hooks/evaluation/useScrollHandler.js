import { useCallback } from 'react';

/**
 * 스크롤 이벤트 핸들러 생성 Custom Hook
 * @param {Object} containerRef - 스크롤 컨테이너의 ref 객체
 * @param {Function} fetchNextPage - 다음 페이지 데이터를 가져오는 함수
 * @param {Boolean} hasNextPage - 다음 페이지 여부
 * @param {Boolean} isFetchingNextPage - 데이터를 가져오는 중인지 여부
 * @returns {Function} - 스크롤 핸들러 콜백 함수
 */
const useScrollHandler = (containerRef, fetchNextPage, hasNextPage, isFetchingNextPage) => {
  return useCallback(() => {
    if (!containerRef.current) return;
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
    if (scrollHeight - scrollTop - clientHeight < 100 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [containerRef, fetchNextPage, hasNextPage, isFetchingNextPage]);
};

export default useScrollHandler;
