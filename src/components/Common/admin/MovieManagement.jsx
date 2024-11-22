import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';
import { lightTheme } from '../../../styles/themes';

function MovieManagement() {
  const { movies, setMovies } = useMovieStore(); 
  const pagetitle = '전체 영화 목록';
  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleSearch = (term) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filteredMovies);
  };

return (
    <PageWrapper>
      <PageTitle>{pagetitle}</PageTitle>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
      <List
        data={movies}
        columns={['영화 제목', '수정', '삭제']}
        actions={[
          { label: '수정', onClick: (item) => alert(`수정: ${item.title}`) },
          { label: '삭제', onClick: (item) => alert(`삭제: ${item.title}`) },
        ]}
      />
    </PageWrapper>
  );
}

export default MovieManagement;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${lightTheme.backgroundGray}
  height: 100%;
`;

const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  margin-bottom: 1rem;
`;

const SearchBarWrapper = styled.div`
  width: 80%;
  margin-bottom: 1rem;
`;