import { useState } from 'react';
import { lightTheme } from '../../../styles/themes';
import { styled } from '@mui/system';
import { useRegisterMovies, useSearchMovies } from '../../../apis/admin/addmovie/queries';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import tableHeaders from '../../../data/admintableheaders';
import useMovieStore from '../../../store/admin/useMovieStore';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useSelectionStore from '../../../store/admin/useSelectionStore';
import AvgRatingBadge from './AvgRatingBadge';

function AddMovie() {
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const { selectedMovies, addMovie, removeMovie, clearSelection } = useSelectionStore();
  const [ searchTerm, setSearchTerm ] = useState('');
  const tableHeader = tableHeaders.addMovie;

  const { data: movies = [], isLoading: isSearching } = useSearchMovies(searchTerm);
  const { mutate: registerMovies, isLoading: isRegistering } = useRegisterMovies();

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleCheckboxChange = (movieId) => {
    if (selectedMovies.includes(movieId)) {
      removeMovie(movieId);
    } else {
      addMovie(movieId);
    }
  };

  const handleRegister = () => {
    const selectedMovieData = movies.filter((movie) => selectedMovies.includes(movie.id));
    registerMovies(selectedMovieData, {
      onSuccess: () => {
        alert('영화 등록이 완료되었습니다.');
        clearSelection();
      },
      onError: (error) => {
        alert(`등록 실패: ${error.message}`);
      },
    });
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <S.Container>
      <S.SearchBox>
        <S.SearchBarTextField
          fullWidth
          label="영화 검색"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </S.SearchBox>
      <S.TableContainer component={Paper}>
      {isSearching ? (
          <S.NoResults>검색 중...</S.NoResults>
        ) : movies.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <S.TableHeadCell>
                  <S.CustomCheckbox disabled />
                </S.TableHeadCell>
                {Object.values(tableHeader).map((header) => (
                  <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentMovies.map((movie) => (
                <TableRow key={movie.id}>
                  <S.TableBodyCell>
                    <S.CustomCheckbox
                      checked={selectedMovies.includes(movie.id)}
                      onChange={() => handleCheckboxChange(movie.id)}
                    />
                  </S.TableBodyCell>
                  <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                  <S.TableBodyCell>
                    <AvgRatingBadge count={movie.rating || 'N/A'} />
                  </S.TableBodyCell>
                  <S.TableBodyCell>{movie.genre || 'N/A'}</S.TableBodyCell>
                  <S.TableBodyCell>{movie.releaseDate || 'N/A'}</S.TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <S.NoResults>검색 결과가 없습니다.</S.NoResults>
        )}
      </S.TableContainer>
      <S.Pagination
        count={Math.ceil(movies.length / moviesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
      <S.RegisterButton
        variant="contained"
        onClick={handleRegister}
        disabled={selectedMovies.length === 0 || isRegistering}
      >
        {isRegistering ? '등록 중...' : '등록'}
      </S.RegisterButton>
    </S.Container>
  );
}

export default AddMovie;

const S = {
  Container: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  }),

  SearchBox: styled(Box)({
    width: '100%',
    maxWidth: '20rem',
    marginBottom: '0.5rem',
  }),

  SearchBarTextField: styled(TextField)({
    height: '2rem',
    '& .MuiInputBase-root': {
      height: '3rem',
    },
  }),

  TableContainer: styled(TableContainer)({
    maxWidth: '81rem',
    width: '100%',
    fontFamily: lightTheme.font.fontSuitRegular,
    fontSize: '1rem',
    border: lightTheme.font.borderDefault,
    overflow: 'hidden',
  }),

  TableHeadCell: styled(TableCell)({
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightBold,
    fontSize: '1rem',
    color: lightTheme.color.fontBlack,
    textTransform: 'uppercase',
  }),

  TableBodyCell: styled(TableCell)({
    fontFamily: lightTheme.font.fontSuitRegular,
    fontWeight: lightTheme.font.fontWeightRegular,
    fontSize: '1rem',
    color: lightTheme.color.fontBlack,
  }),

  CustomCheckbox: styled(Checkbox)({
    transform: 'scale(0.8)',
    padding: '0.2rem',
  }),

  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),

  RegisterButton: styled(Button)({
    marginTop: '1rem',
    backgroundColor: lightTheme.color.buttonPink,
    color: lightTheme.color.fontWhite,
    '&:disabled': {
      backgroundColor: lightTheme.color.fontGray,
    },
  }),

  NoResults: styled('div')({
    padding: '2rem',
    textAlign: 'center',
    color: lightTheme.color.fontGray,
    fontSize: '1.2rem',
  }),
};
