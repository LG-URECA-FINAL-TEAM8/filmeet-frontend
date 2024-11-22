import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';

function AddMovie() {
  const { movies, setMovies } = useMovieStore();

  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleAdd = (movie) => {
    alert(`"${movie.title}" 영화가 추가되었습니다.`);
    // 추가 동작을 여기서 처리
  };
  const handleSearch = (searchTerm) => {

  };

  return (
    <PageWrapper>
      <PageTitle>새로운 영화 추가</PageTitle>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
      <ListWrapper>
        <List
          data={movies} // zustand의 movies 데이터 사용
          columns={['영화 제목', '추가']} // 영화 제목과 추가 버튼만 표시
          actions={[
            { label: '추가', onClick: handleAdd }, // 추가 버튼 설정
          ]}
        />
      </ListWrapper>
    </PageWrapper>
  );
}

export default AddMovie;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
  height: 100%;
`;

const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SearchBarWrapper = styled.div`
  width: 80%;
  margin-bottom: 1rem;
`;

const ListWrapper = styled.div`
  width: 80%;
  flex: 1;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 1rem;
`;