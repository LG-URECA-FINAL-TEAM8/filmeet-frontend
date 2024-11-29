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
import EditButton from '../../../assets/svg/Edit';
import DeleteButton from '../../../assets/svg/Delete';
import LikeBadge from './LikeBadge';
import CommentBadge from './CommentBadge';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useMovieStore from '../../../store/admin/useMovieStore';
import useEditStore from '../../../store/admin/useEditStore';

function MovieManagement() {
  const { movies, setMovies, updateMovieField } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const { editingRow, setEditingRow } = useEditStore();
  const saveButton = '저장';
  const tableHeader = {
    movieName: '영화 이름',
    commentNum: '댓글 수',
    likeNum: '좋아요 수',
    avgRating: '평균 평점',
    genre: '장르',
    releaseDate: '개봉일',
    action: '수정 / 삭제',
  };

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
    <StyledContainer>
      <StyledSearchBox>
        <StyledSearchBarTextField
          fullWidth
          label="영화 검색"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </StyledSearchBox>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.values(tableHeader).map((header) => (
                <StyledTableHeadCell key={header}>{header}</StyledTableHeadCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMovies.map((movie) => (
              <TableRow key={movie.id}>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.title}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'title', e.target.value)
                      }
                    />
                  ) : (
                    movie.title
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.comments}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'comments', e.target.value)
                      }
                      type="number"
                    />
                  ) : (
                    <CommentBadge count={movie.comments || 0} />
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.likes}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'likes', e.target.value)
                      }
                      type="number"
                    />
                  ) : (
                    <LikeBadge count={movie.likes || 0} />
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.rating}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'rating', e.target.value)
                      }
                    />
                  ) : (
                    movie.rating
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.genre}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'genre', e.target.value)
                      }
                    />
                  ) : (
                    movie.genre
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledTextField
                      value={movie.releaseDate}
                      onChange={(e) =>
                        handleInputChange(movie.id, 'releaseDate', e.target.value)
                      }
                    />
                  ) : (
                    movie.releaseDate
                  )}
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  {editingRow === movie.id ? (
                    <StyledSaveButton onClick={handleSave}>
                      {saveButton}
                    </StyledSaveButton>
                  ) : (
                    <EditButton 
                      onClick={() => handleEdit(movie.id)} 
                      style={{ marginLeft: '0.5rem' }}
                    />
                  )}
                  <DeleteButton
                    onClick={() => handleDelete(movie)}
                  />
                </StyledTableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <StyledPagination
        count={Math.ceil(movies.length / moviesPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </StyledContainer>
  );
}

export default MovieManagement;

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem',
});

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    height: '3rem',
    fontSize: '1rem',
    padding: '0.25rem',
  },
});

const StyledSearchBox = styled(Box)({
  width: '100%',
  maxWidth: '20rem',
  marginBottom: '0.5rem',
  marginLeft: '49rem',
});

const StyledSearchBarTextField = styled(TextField) ({
  height: '3rem',
  '& .MuiInputBase-root': {
    height: '3rem',
  },
});

const StyledTableContainer = styled(TableContainer)({
  maxWidth: '81rem',
  width: '100%',
  fontFamily: lightTheme.font.fontSuitRegular,
  fontSize: '1rem',
});

const StyledTableHeadCell = styled(TableCell)({
  fontFamily: lightTheme.font.fontSuitRegular,
  fontWeight: lightTheme.font.fontWeightBold,
  fontSize: '1rem',
  color: lightTheme.color.fontBlack,
  textTransform: 'uppercase',
});

const StyledTableBodyCell = styled(TableCell)({
  fontFamily: lightTheme.font.fontSuitRegular,
  fontWeight: lightTheme.font.fontWeightRegular,
  fontSize: '1rem',
  color: lightTheme.color.fontBlack,
});

const StyledSaveButton = styled('button')({
  backgroundColor: lightTheme.color.backgroundBlue,
  color: lightTheme.color.fontWhite,
  border: 'none',
  borderRadius: '0.25rem',
  padding: '0.5rem 0.5rem',
  fontFamily: lightTheme.font.fontSuitRegular,
  fontSize: '1rem',
  fontWeight: lightTheme.font.fontWeightRegular,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: lightTheme.color.backgroundButtonBlue,
  },
});

const StyledPagination = styled(Pagination) ({
  marginTop: '1rem',
});