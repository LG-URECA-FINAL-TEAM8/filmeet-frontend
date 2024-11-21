import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function SearchBar({ onSearch }) {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="검색" />
      <SearchButton onClick={onSearch}>검색</SearchButton>
    </SearchBarWrapper>
  );
}

export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const SearchInput = styled.input`
  width: calc(41rem - 4rem); 
  height: 3rem; 
  padding: 0 1rem;
  font-size: 1rem;
  border: ${lightTheme.defaultBorder};
  border-radius: 0.25rem 0 0 0.25rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${lightTheme.fontBlack};
  }
`;

const SearchButton = styled.button`
  width: 4rem;
  height: 3rem; 
  background-color:  ${lightTheme.fontBlack};
  color: ${lightTheme.fontWhite};
  border: none;
  border-radius: 0 0.25rem 0.25rem 0;
  font-size: 1rem;
  cursor: pointer;
  font-family: ${lightTheme.fontSuitRegular};
  &:hover {
    background-color: ${lightTheme.footerBlack};
  }
`;
