import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';

function MovieManagement() {
  const { movies, setMovies } = useMovieStore(); 

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
    <Wrapper>
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
    </Wrapper>
  );
}


export default MovieManagement;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
  height: 100vh;
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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;