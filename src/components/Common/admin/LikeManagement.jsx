import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './List';
import { lightTheme }from '../../../styles/themes';

function LikeManagement() {

  const pagetitle = '좋아요 관리';
  const handleSearch = (searchTerm) => {

  };

  return (
    <PageWrapper>
      <PageTitle>{pagetitle}</PageTitle>
      <SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </SearchBarWrapper>
        <List/>
    </PageWrapper>
  );
}

export default LikeManagement;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${lightTheme.backgroundGray};
  height: 100%;
`;
const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  margin-bottom: 1rem;
`;
const SearchBarWrapper = styled.div`
  width: 80%;
  margin: 1rem 0;
`;