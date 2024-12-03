import { useEffect } from 'react';
import { styled } from '@mui/system';
import { movies as moviesData } from '../../../data/movies';
import { lightTheme } from '../../../styles/themes';
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
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import LikeBadge from './LikeBadge';
import CommentBadge from './CommentBadge';
import tableHeaders from '../../../data/admintableheaders';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useMovieStore from '../../../store/admin/useMovieStore';
import useEditStore from '../../../store/admin/useEditStore';

function MovieManagement() {
  const { movies, setMovies, updateMovieField } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const { editingRow, setEditingRow } = useEditStore();
  const tableHeader = tableHeaders.movieManagement;

  useEffect(() => {
    const enhancedMovies = moviesData.map(({ ...rest }) => ({
      ...rest,
      likes: rest.likes || 0,
      comments: rest.comments || 0,
      genre: rest.genre || 'N/A',
    }));
    setMovies(enhancedMovies);
  }, [setMovies]);

  const handleEdit = (movieId) => {
    setEditingRow(movieId);
  };

  const handleSave = () => {
    setEditingRow(null);
  };

  const handleDelete = (movie) => {
    alert(`"${movie.title}" 삭제 요청`)
  }

  const handleInputChange = (movieId, field, value) => {
    updateMovieField(movieId, field, value);
  };

  const handleSearch = (term) => {
    if (term.trim() === '') {
      const enhancedMovies = moviesData.map(({ ...rest }) => ({
        ...rest,
        likes: rest.likes || 0,
        comments: rest.comments || 0,
        genre: rest.genre || 'N/A',
      }));
      setMovies(enhancedMovies);
      setCurrentPage(1);
      return;
    }

    const filteredMovies = moviesData
      .filter((movie) => movie.title.toLowerCase().includes(term.toLowerCase()))
      .map(({ ...rest }) => ({
        ...rest,
        likes: rest.likes || 0,
        comments: rest.comments || 0,
        genre: rest.genre || 'N/A',
      }));

    setMovies(filteredMovies);
    setCurrentPage(1);
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
        <Table>
          <TableHead>
            <TableRow>
              {Object.values(tableHeader).map((header) => (
                <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMovies.map((movie) => (
              <TableRow key={movie.id}>
                <S.TableBodyCell>
                  {editingRow === movie.id ? (
                    <S.TextField
                      value={movie.title}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'title', e.target.value)
                      }
                    />
                  ) : (
                    movie.title
                  )}
                </S.TableBodyCell>
                <S.TableBodyCell>
                  <CommentBadge count={movie.comments || 0} />
                </S.TableBodyCell>
                <S.TableBodyCell>
                  <LikeBadge count={movie.likes || 0} />
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.rating}</S.TableBodyCell>
                <S.TableBodyCell>{movie.genre}</S.TableBodyCell>
                <S.TableBodyCell>{movie.releaseDate}</S.TableBodyCell>
                <S.TableBodyCell>
                  {editingRow === movie.id ? (
                    <CheckIcon
                      onClick={handleSave}
                      style={{ cursor: 'pointer', marginRight: '1.5rem', color: lightTheme.color.fontBlack }}
                    />
                  ) : (
                    <ModeEditTwoToneIcon
                      onClick={() => handleEdit(movie.id)}
                      style={{ cursor: 'pointer', marginRight: '1.5rem', color: lightTheme.color.fontGray }}
                    />
                  )}
                  <DeleteIcon
                    onClick={() => handleDelete(movie)}
                    style={{ cursor: 'pointer', color: lightTheme.color.buttonPink }}
                  />
                </S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={Math.ceil(movies.length / moviesPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </S.Container>
  );
}

export default MovieManagement;

const S = {
  Container: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  }),

  TextField: styled(TextField)({
    '& .MuiInputBase-root': {
      width: '20rem',
      height: '2rem',
      fontSize: '1rem',
    },
  }),

  SearchBox: styled(Box)({
    width: '100%',
    maxWidth: '20rem',
    marginBottom: '0.5rem',
    marginLeft: '49rem',
  }),

  SearchBarTextField: styled(TextField) ({
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