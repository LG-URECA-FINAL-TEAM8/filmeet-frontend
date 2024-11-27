import { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './Table';
import { lightTheme }from '../../../styles/themes';

function LikeManagement({pageTitle}) {
  
  const handleSearch = (searchTerm) => {
    
  };

  return (
    <S.PageWrapper>
      <S.PageTitle>{pageTitle}</S.PageTitle>
      <S.SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </S.SearchBarWrapper>
        <List/>
    </S.PageWrapper>
  );
}

const S = {
  PageWrapper: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${lightTheme.backgroundGray};
  height: 100%;
  `,
  PageTitle: styled.h2`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  margin-bottom: 1rem;
  `,
  SearchBarWrapper: styled.div`
  width: 80%;
  margin: 1rem 0;
  `,
  
};
export default LikeManagement;