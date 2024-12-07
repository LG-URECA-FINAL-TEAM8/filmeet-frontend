import { useEffect } from 'react';
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
import tableHeaders from '../../../data/admintableheaders';
import useMovieStore from '../../../store/admin/useMovieStore';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import DeleteIcon from '@mui/icons-material/Delete';
import LockIcon from '@mui/icons-material/Lock';
import LikeBadge from './LikeBadge';
import ReviewerBadge from './ReviewerBadge';
import { useAdminShowReviewList } from '../../../apis/admin/queries'; 
import { useQueryClient } from '@tanstack/react-query';

function LikeManagement() {
  const { movies, setMovies } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const tableHeader = tableHeaders.likeManagement;
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useAdminShowReviewList({
    page: currentPage,
    size: moviesPerPage,
    movieTitle: '', // 검색어
    createdAt: '2024-12-06', // 특정 날짜
    sort: 'asc',
  });

  useEffect(() => {
    if (data && Array.isArray(data.reviews)) {
        // 서버에서 가져온 데이터를 상태로 설정
        const enhancedMovies = data.reviews.map(({ ...rest }) => ({
            ...rest,
            reviewer: 'Admin',
            likes: rest.likes || 0,
            rating: rest.rating || 'N/A',
            createdDate: rest.createdDate || 'N/A',
        }));
        setMovies(enhancedMovies);
    } else {
        console.warn('Unexpected data structure:', data); // 데이터 구조 확인용 로그
    }
}, [data, setMovies]);

  const handleSearch = (term) => {
    queryClient.invalidateQueries(['reviewList', { page: currentPage, size: moviesPerPage, movieTitle: term, createdAt: '', sort: 'asc' }]);
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
    refetch({
      page: value,
      size: moviesPerPage,
      movieTitle: '', // 현재 검색어 유지
      createdAt: '',
      sort: 'asc',
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error occurred while fetching data.</p>;

  const currentMovies = movies || [];

  return (
    <S.Container>
      <S.SearchBox>
        <S.TextField
          variant="outlined"
          fullWidth
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
                  <ReviewerBadge count={movie.reviewer} />
                </S.TableBodyCell>
                <S.TableBodyCell>
                  <LikeBadge count={movie.likes} />
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.rating}</S.TableBodyCell>
                <S.TableBodyCell>{movie.createdDate}</S.TableBodyCell>
                <S.TableBodyCell>
                  <S.DeleteIcon onClick={() => handleDelete(movie)} />
                  <S.LockIcon onClick={() => handleLock(movie)} />
                </S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={Math.ceil((data?.total || 0) / moviesPerPage)}
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

  DeleteIcon: styled(DeleteIcon)({
    cursor: 'pointer',
    color: lightTheme.color.buttonPink,
  }),

  LockIcon: styled(LockIcon)({
    cursor: 'pointer',
    marginLeft: '1rem',
    color: lightTheme.color.fontGray,
  }),

  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),
};