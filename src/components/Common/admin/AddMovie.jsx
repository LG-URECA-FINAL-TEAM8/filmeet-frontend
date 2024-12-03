import { useEffect } from 'react';
import { movies as moviesData } from '../../../data/movies';
import { lightTheme } from '../../../styles/themes';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import tableHeaders from '../../../data/admintableheaders';
import useMovieStore from '../../../store/admin/useMovieStore';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import AdminAddModal from '../modal/AdminAddModal';
import AvgRatingBadge from './AvgRatingBadge';

function AddMovie() {
  const { movies, setMovies } = useMovieStore();
  const { addModal, openAddModal, closeAddModal } = useAdminModalStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const tableHeader = tableHeaders.addMovie;

  useEffect(() => {
    const enhancedMovies = moviesData.map(({ ...rest }) => ({
      ...rest,
    }));
    setMovies(enhancedMovies);
  }, [setMovies]);

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setMovies(moviesData);
      return;
    }
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filteredMovies);
    setCurrentPage(1); 
  };

  const handleAdd = (movie) => {
    openAddModal(movie);
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
          label="영화 검색"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </S.SearchBox>
      <S.TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.values(tableHeader).map((header) => (
                  <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMovies.map((movie, index) => (
              <TableRow key={index}>
                <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                <S.TableBodyCell>
                  <AvgRatingBadge count={movie.rating || 'N/A'} />
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.genre || 'N/A'}</S.TableBodyCell>
                <S.TableBodyCell>{movie.releaseDate || 'N/A'}</S.TableBodyCell>
                <S.TableBodyCell>
                  <S.AddIcon onClick={() => handleAdd(movie)} />
                </S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={Math.ceil(movies.length / moviesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
      {addModal.isOpen && (
        <AdminAddModal
          movie={addModal.selectedMovie}
          onClose={closeAddModal}
        />
      )}
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
    marginLeft: '49rem',
  }),

  SearchBarTextField: styled(TextField)({
    variant: "outlined",
    fullWidth: true,
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
  
  AddIcon: styled(PlaylistAddOutlinedIcon)({
    cursor: 'pointer',
    marginRight: '1rem',
  }),

  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),
};