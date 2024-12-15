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
  Pagination 
} from '@mui/material';
import { styled } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';
import LikeBadge from './LikeBadge';
import ReviewerBadge from './ReviewerBadge';
import { useState, useEffect } from 'react';
import { lightTheme } from '../../../styles/themes';
import tableHeaders from '../../../data/admintableheaders';
import useMovieStore from '../../../store/admin/useMovieStore';
import { useAdminReviewBlind } from '../../../apis/admin/queries';
import { useAdminShowReviewList } from '../../../apis/admin/queries';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import { 
  handleBlind, 
  handleKeyDown, 
  handlePageChange 
} from '../../../utils/admin/likeManagementUtils';


function LikeManagement() {
  const { movies, setMovies } = useMovieStore();
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const tableHeader = tableHeaders.likeManagement;
  const { data, isLoading, isError } = useAdminShowReviewList({
    movieTitle: submittedTerm || "",
    sort: 'asc',
    size: moviesPerPage,
    page: currentPage - 1,
  });
  const { mutate: blindReview } = useAdminReviewBlind();
  
  /* 서버에서 받아온 리뷰 데이터가 data.content에 있고, data.content가 배열인지 확인해서 데이터 처리
  enhancedMovies에서는 각 데이터를 컴포넌트에 필요한 형태로 재구성하고 변환된 데이터를 
  useMovieStore를 통해 전역 상태 movies로 저장 */
  useEffect(() => {
    if (data && Array.isArray(data.content)) {
      const enhancedMovies = data.content.map(({ id, movieTitle, username, createdAt }) => ({
        id,
        title: movieTitle,
        reviewer: username,
        likes: 0,
        rating: 'N/A',
        createdDate: createdAt,
      }));
      setMovies(enhancedMovies);
    }
  }, [data, setMovies]);

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
          onKeyDown={(e) => handleKeyDown(e, searchTerm, setSubmittedTerm, setCurrentPage)}
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
                  <S.LockIcon onClick={() => handleBlind(movie.id, blindReview)} />
                </S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
      <S.Pagination
        count={data?.totalPages || 1}
        page={currentPage}
        onChange={(event, value) => handlePageChange(value, setCurrentPage)}
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

  LockIcon: styled(LockIcon)({
    cursor: 'pointer',
    marginLeft: '0.2rem',
    color: lightTheme.color.fontGray,
  }),

  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),
};
