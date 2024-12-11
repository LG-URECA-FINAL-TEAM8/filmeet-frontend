import { useState, useEffect } from 'react';
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
import { useAdminReviewBlind } from '../../../apis/admin/queries';

function LikeManagement() {
  const { movies, setMovies } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const tableHeader = tableHeaders.likeManagement;

  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');

  // React Query로 데이터 가져오기
  const { data, isLoading, isError } = useAdminShowReviewList({
    page: currentPage - 1, // 서버는 0-based 페이지 번호를 사용하는 것으로 보임
    size: moviesPerPage,
    movieTitle: submittedTerm, // 제출된 검색어
    createdAt: '2024-12-06',
    sort: 'asc',
  });

  const { mutate: blindReview } = useAdminReviewBlind();

  useEffect(() => {
    if (data && Array.isArray(data.content)) {
      const enhancedMovies = data.content.map(({ id, movieTitle, username, createdAt }) => ({
        id,
        title: movieTitle,
        reviewer: username,
        likes: 0, // 서버에 좋아요 데이터가 없는 경우 기본값 설정
        rating: 'N/A', // 서버에 평점 데이터가 없는 경우 기본값 설정
        createdDate: createdAt,
      }));
      setMovies(enhancedMovies);
    }
  }, [data, setMovies]);

  const handleBlind = (reviewId) => {
    if (confirm('이 리뷰를 블라인드 처리하시겠습니까?')) {
      blindReview(reviewId, {
        onSuccess: () => {
          alert('리뷰가 블라인드 처리되었습니다.');
        },
        onError: (error) => {
          console.error(error);
          alert('리뷰 블라인드 처리 중 오류가 발생했습니다.');
        },
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!searchTerm.trim()) {
        alert('검색어를 입력하세요.');
        return;
      }
      setSubmittedTerm(searchTerm);
      setCurrentPage(1); // 검색 시 첫 페이지로 이동
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>An error occurred while fetching data. Please try again.</p>;

  const currentMovies = movies || [];

  return (
    <S.Container>
      <S.SearchBox>
        <S.TextField
          variant="outlined"
          fullWidth
          label="영화 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} // 엔터 키로 검색 제출
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
                  <S.DeleteIcon onClick={() => alert(`"${movie.title}" 삭제 요청`)} />
                  <S.LockIcon onClick={() => handleBlind(movie.id)} />
                </S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={data?.totalPages || 0} // 서버에서 totalPages 사용
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
