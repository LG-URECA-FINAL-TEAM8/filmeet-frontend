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
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
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
    <S.Container>
      <S.SearchBox>
        <S.TextField
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
              <S.TableHeadCell>{tableHeader.movieName}</S.TableHeadCell>
              <S.TableHeadCell>{tableHeader.reviewer}</S.TableHeadCell>
              <S.TableHeadCell>{tableHeader.likeNum}</S.TableHeadCell>
              <S.TableHeadCell>{tableHeader.avgRating}</S.TableHeadCell>
              <S.TableHeadCell>{tableHeader.createdDate}</S.TableHeadCell>
              <S.TableHeadCell>{tableHeader.Action}</S.TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentMovies.map((movie, index) => (
              <TableRow key={index}>
                <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                <S.TableBodyCell>
                  <ReviewerBadge count={movie.reviewer} />
                </S.TableBodyCell>
                <S.TableBodyCell>
                  <LikeBadge count={movie.likes} />
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.rating}</S.TableBodyCell>
                <S.TableBodyCell>{movie.createdDate}</S.TableBodyCell>
                <S.TableBodyCell>
                  <DeleteIcon
                    onClick={() => handleDelete(movie)}
                    style={{ cursor: 'pointer', color: lightTheme.color.buttonPink }}
                  />
                  <LockIcon
                    onClick={() => handleLock(movie)}
                    style={{ cursor: 'pointer', marginLeft: '1rem', color: lightTheme.color.fontGray }}
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
        onChange={handlePageChange}
      />
    </S.Container>
  );
}

export default LikeManagement;

const S = {
  Container: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  }),

  TextField: styled(TextField)({
    height: '2rem',
    marginLeft: '6rem',
    '& .MuiInputBase-root': {
      height: '3rem',
    },
  }),

  SearchBox: styled(Box)({
    width: '100%',
    maxWidth: '20rem',
    marginBottom: '0.5rem',
    marginLeft: '49rem',
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