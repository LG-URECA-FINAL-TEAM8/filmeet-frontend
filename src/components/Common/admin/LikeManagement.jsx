import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';


function LikeManagement() {
  const [movies, setMovies] = useState([]);

  const handleSearch = (searchTerm) => {

    console.log('검색어:', searchTerm);
  };

  return (
    <PageWrapper>
      <PageTitle>좋아요 관리</PageTitle>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
      <ListWrapper>
        <List movies={movies} />
      </ListWrapper>
    </PageWrapper>
  );
}

export default LikeManagement;

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
  margin: 1rem 0;
`;

const ListWrapper = styled.div`
  width: 40%;
  flex: 1;
  overflow-y: auto;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 1rem;
`;