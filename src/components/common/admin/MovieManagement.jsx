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
} from '@mui/material';
import {
  handleSearch,
  handlePageChange,
  handleEdit,
  handleDelete,
} from '../../../utils/admin/movieManagementUtils';
import { useState } from 'react';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import { lightTheme } from '../../../styles/themes';
import AdminEditModal from '../modal/AdminEditModal';
import tableHeaders from '../../../data/admintableheaders';
import { useAdminSelectMovies } from '../../../apis/admin/queries';
import { useAdminDeleteMovie } from '../../../apis/admin/queries';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import Loading from '../loading/Loading';

function MovieManagement() {
  const { movieManagement } = tableHeaders;
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const { isOpen, openModal, setModalData } = useAdminModalStore();
  const { mutate: deleteMovie } = useAdminDeleteMovie();
  const { data, isLoading, error } = useAdminSelectMovies({
    page: currentPage,
    size: moviesPerPage,
    query: submittedTerm,
  });
  const movies = data?.content || [];
  const totalPages = data?.totalPages || 1;

  if (isLoading) return <Loading />;
  if (error) return <div>에러 발생: {error.message}</div>;
  if (!movies.length) return <div>검색 결과가 없습니다.</div>;

  return (
    <>
      <AdminEditModal isOpen={isOpen} />
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
                {Object.values(movieManagement).map((header) => (
                  <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow key={movie.id}>
                  <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                  <S.TableBodyCell>{movie.likeCounts || 0}</S.TableBodyCell>
                  <S.TableBodyCell>
                    {movie.averageRating !== null && movie.averageRating !== undefined
                      ? movie.averageRating.toFixed(2)
                      : 'N/A'}
                  </S.TableBodyCell>
                  <S.TableBodyCell>
                    {movie.genreTypes?.length > 0 ? movie.genreTypes.join(', ') : '미정'}
                  </S.TableBodyCell>
                  <S.TableBodyCell>{movie.releaseDate || '알 수 없음'}</S.TableBodyCell>
                  <S.TableBodyCell>
                    <S.ModeEditTwoToneIcon
                      onClick={() => handleEdit(movie, setModalData, openModal)}
                    />
                    <S.DeleteIcon onClick={() => handleDelete(movie, deleteMovie)} />
                  </S.TableBodyCell>
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
    </>
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
  ModeEditTwoToneIcon: styled(ModeEditTwoToneIcon)({
    cursor: 'pointer',
    marginRight: '1.5rem',
    color: lightTheme.color.fontGray,
  }),
  DeleteIcon: styled(DeleteIcon)({
    cursor: 'pointer',
    color: lightTheme.color.buttonPink,
  }),
  Pagination: styled(Pagination)({
    marginTop: '1rem',
  }),
};
