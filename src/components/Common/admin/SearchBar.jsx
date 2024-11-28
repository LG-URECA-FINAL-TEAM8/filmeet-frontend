import styled from 'styled-components';
import { lightTheme } from '../../../styles/themes';

function SearchBar({ placeholder }) {
  return (
    <S.SearchBarWrapper>
      <S.SearchInput type="text" placeholder={placeholder} />
    </S.SearchBarWrapper>
  );
}

const S = {
  SearchBarWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `,
  
  SearchInput: styled.input`
    width: 18rem;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;
    outline: none;
    color: ${lightTheme.fontWhite};
    &:focus {
      border-color: ${lightTheme.fontBlack};
    }
  `,
};

export default SearchBar;