import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';
import { lightTheme }from '../../../styles/themes';

function AddMovie({pageTitle}) {
  const { movies, setMovies } = useMovieStore();

  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleAdd = (movie) => {
    alert(`"${movie.title}" 영화가 추가되었습니다.`);
  };
  const handleSearch = (searchTerm) => {

  };

  return (
    <PageWrapper>
      <PageTitle>{pageTitle}</PageTitle>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
        <List
          data={movies}
          columns={['영화 제목', '추가']}
          actions={[
            { label: '추가', onClick: handleAdd },
          ]}
        />
    </PageWrapper>
  );
}

export default AddMovie;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${lightTheme.backgroundGray};
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