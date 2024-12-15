import { 
  Box, 
  TextField, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Pagination,
  Checkbox
} from '@mui/material';
import { 
  handleSearch, 
  handlePageChange, 
} from '../../../utils/admin/movieManagementUtils';
import { useState } from 'react';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';
import tableHeaders from '../../../data/admintableheaders';
import { useAdminSelectMovies } from '../../../apis/admin/queries';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useSelectionStore from '../../../store/admin/useSelectionStore';

function RankManagement() {
  const { rankingManagement } = tableHeaders;
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const { selectedMovies, addMovie, removeMovie, clearSelection } = useSelectionStore();
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ submittedTerm, setSubmittedTerm ] = useState('');
  const { data, isLoading, error } = useAdminSelectMovies({
    page: currentPage,
    size: moviesPerPage,
    query: submittedTerm,
  });
  const movies = data?.content || [];
  const totalPages = data?.totalPages || 1

  const handleCheckboxChange = (movieId) => {
    if (selectedMovies.includes(movieId)) {
      removeMovie(movieId);
    } else {
      addMovie(movieId);
    }
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;
  if (!movies.length) return <div>검색 결과가 없습니다.</div>;

  return (
    <S.Container>
      <S.SearchBox>
        <S.SearchBarTextField
          variant="outlined"
          fullWidth
          label="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleSearch(e, searchTerm, setSubmittedTerm, setCurrentPage)}
        />
      </S.SearchBox>
      <S.TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <S.TableHeadCell>
                <Checkbox
                  indeterminate={
                    selectedMovies.length > 0 && selectedMovies.length < movies.length
                  }
                  checked={movies.length > 0 && selectedMovies.length === movies.length}
                  onChange={() => {
                    if (selectedMovies.length === movies.length) {
                      clearSelection();
                    } else {
                      movies.forEach((movie) => addMovie(movie.id));
                    }
                  }}
                />
              </S.TableHeadCell>
              {Object.values(rankingManagement).map((header) => (
                <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <S.TableBodyCell>
                  <Checkbox
                    checked={selectedMovies.includes(movie.id)}
                    onChange={() => handleCheckboxChange(movie.id)}
                  />
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                <S.TableBodyCell>{movie.likeCounts || 0}</S.TableBodyCell>
                <S.TableBodyCell>
                  {movie.averageRating !== null &&
                  movie.averageRating !== undefined
                    ? movie.averageRating.toFixed(2)
                    : 'N/A'}
                </S.TableBodyCell>
                <S.TableBodyCell>
                  {movie.genreTypes?.length > 0
                    ? movie.genreTypes.join(', ')
                    : '미정'}
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.releaseDate || '알 수 없음'}</S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, value) => handlePageChange(value, setCurrentPage)}
      />
    </S.Container>
  );
}

export default RankManagement;

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
    marginLeft: '49rem',
  }),
  SearchBarTextField: styled(TextField)({
    height: '2rem',
    marginLeft: '6rem',
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
  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),
};
