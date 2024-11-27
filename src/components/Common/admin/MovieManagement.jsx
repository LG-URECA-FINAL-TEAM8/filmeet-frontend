import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Table from './Table';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import AdminEditModal from '../modal/AdminEditModal';
import { lightTheme } from '../../../styles/themes';

function MovieManagement() {
  const { movies, setMovies } = useMovieStore();
  const { isModalOpen, openModal, closeModal, selectedMovie } = useAdminModalStore();

  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleSearch = (term) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleEdit = (movie) => {
    openModal(movie);
  };

  const handleDelete = (movie) => {
    alert(`"${movie.title}" 삭제 요청`);
  };

  const columns = ['영화 이름', '좋아요 수', '댓글 수', '평균 평점', '장르', '개봉일', '액션'];

  const data = movies.map((movie) => ({
    name: movie.title,
    likes: movie.likes || 0,
    comments: movie.comments || 0,
    rating: movie.rating || 'N/A',
    genre: movie.genre || 'N/A',
    releaseDate: movie.releaseDate || 'N/A',
  }));

  const actions = [
    { label: '수정', onClick: handleEdit, color: 'blue' },
    { label: '삭제', onClick: handleDelete, color: 'red' },
  ];

  return (
    <PageWrapper>
        <Title>영화 관리</Title>
        <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} placeholder="영화 검색" />
        </SearchBarWrapper>
      <TableWrapper>
        <Table data={data} columns={columns} actions={actions} />
      </TableWrapper>
      {isModalOpen && <AdminEditModal movie={selectedMovie} onClose={closeModal} />}
    </PageWrapper>
  );
}

export default MovieManagement;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${lightTheme.backgroundGray};
  padding: 2rem;
  min-height: 100vh;
  width: 1920px;
  height: 986px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
`;

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1303px; /* 테이블 크기를 명확히 지정 */
  height: 100%;
  overflow-x: auto; /* 가로 스크롤 필요 시 활성화 */
  border: 1px solid ${lightTheme.borderDefault};
  border-radius: 0.5rem;
  margin: 0 auto; /* 테이블을 페이지 중앙에 배치 */
`;
const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 1rem;
  margin-top: 0rem;
`;