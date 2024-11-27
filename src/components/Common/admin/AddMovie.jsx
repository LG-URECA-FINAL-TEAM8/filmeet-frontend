import { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import List from './Table';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';
import { lightTheme }from '../../../styles/themes';
import AdminAddModal from '../modal/AdminAddModal';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';

function AddMovie({pageTitle}) {
  const { movies, setMovies } = useMovieStore();
  const { openAddModal } = useAdminModalStore();

  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleAdd = (movie) => {
    openAddModal(movie);
  };
  const handleSearch = (searchTerm) => {
    
  };

  return (
    <S.PageWrapper>
      <S.PageTitle>{pageTitle}</S.PageTitle>
      <S.SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </S.SearchBarWrapper>
        <List
          data={movies}
          columns={['영화 제목', '추가']}
          actions={[
            { label: '추가', onClick: handleAdd },
          ]}
        />
        <AdminAddModal />
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
  `,
  
  PageTitle: styled.h2`
  font-size: 1.5rem;
  font-weight: ${lightTheme.fontWeightBold};
  margin-bottom: 1rem;
  `,
  
  SearchBarWrapper: styled.div`
  width: 80%;
  margin-bottom: 1rem;
  `,
};

export default AddMovie;