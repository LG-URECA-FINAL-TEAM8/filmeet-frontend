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
import useMovieStore from '../../../store/admin/useMovieStore';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import DeleteButton from '../../../assets/svg/Delete';
import LockButton from '../../../assets/svg/Lock';
import LikeBadge from './LikeBadge';
import ReviewerBadge from './ReviewerBadge';

function LikeManagement() {
  const { movies, setMovies } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();

  const tableHeader = {
    movieName: '영화 이름',
    reviewer: '작성자',
    likeNum: '좋아요 수',
    avgRating: '평점',
    createdDate: '작성일',
    Action: '삭제 / 숨김',
  };

  useEffect(() => {
    const enhancedMovies = moviesData.map(({ ...rest }) => ({
      ...rest,
      reviewer: 'Admin',
      likes: rest.likes || 0,
      rating: rest.rating || 'N/A',
      genre: rest.genre || 'N/A',
      createdDate: rest.createdDate || '2024-12-01',
    }));
    setMovies(enhancedMovies);
  }, [setMovies]);

  const handleSearch = (term) => {
    if (term.trim() === '') {
      const enhancedMovies = moviesData.map(({ ...rest }) => ({
        ...rest,
        reviewer: 'Admin',
        likes: rest.likes || 0,
        rating: rest.rating || 'N/A',
        genre: rest.genre || 'N/A',
        createdDate: rest.createdDate || '2024-12-01',
      }));
      setMovies(enhancedMovies);
      return;
    }

    const filteredMovies = moviesData
      .filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      )
      .map(({ ...rest }) => ({
        ...rest,
        reviewer: 'Admin',
        likes: rest.likes || 0,
        rating: rest.rating || 'N/A',
        genre: rest.genre || 'N/A',
        createdDate: rest.createdDate || '2024-12-01',
      }));

    setMovies(filteredMovies);
    setCurrentPage(1);
  };

  const handleDelete = (movie) => {
    alert(`"${movie.title}" 삭제 요청`);
  };

  const handleLock = (movie) => {
    alert(`"${movie.title}" 잠금 요청`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <StyledContainer>
      <StyledSearchBox>
        <StyledTextField
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
              <StyledTableHeadCell>{tableHeader.movieName}</StyledTableHeadCell>
              <StyledTableHeadCell>{tableHeader.reviewer}</StyledTableHeadCell>
              <StyledTableHeadCell>{tableHeader.likeNum}</StyledTableHeadCell>
              <StyledTableHeadCell>{tableHeader.avgRating}</StyledTableHeadCell>
              <StyledTableHeadCell>{tableHeader.createdDate}</StyledTableHeadCell>
              <StyledTableHeadCell>{tableHeader.Action}</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMovies.map((movie, index) => (
              <TableRow key={index}>
                <StyledTableBodyCell>{movie.title}</StyledTableBodyCell>
                <StyledTableBodyCell>
                  <ReviewerBadge count={movie.reviewer} />
                </StyledTableBodyCell>
                <StyledTableBodyCell>
                  <LikeBadge count={movie.likes} />
                </StyledTableBodyCell>
                <StyledTableBodyCell>{movie.rating}</StyledTableBodyCell>
                <StyledTableBodyCell>{movie.createdDate}</StyledTableBodyCell>
                <StyledTableBodyCell>
                  <StyledDeleteButton
                    onClick={() => handleDelete(movie)}
                  />
                  <LockButton
                    onClick={() => handleLock(movie)}
                    style={{ marginLeft: '0.5rem' }}
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
        onChange={handlePageChange}
      />
    </StyledContainer>
  );
}

export default LikeManagement;

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem',
});

const StyledTextField = styled(TextField) ({
  height: '2rem',
  marginLeft: '6rem',
  '& .MuiInputBase-root': {
    height: '3rem',
  },
});

const StyledSearchBox = styled(Box)({
  width: '100%',
  maxWidth: '20rem',
  marginBottom: '0.5rem',
  marginLeft: '49rem',
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

const StyledDeleteButton = styled(DeleteButton)({
  marginLeft: '0.5rem',
})

const StyledPagination = styled(Pagination) ({
  marginTop: '1rem',
});