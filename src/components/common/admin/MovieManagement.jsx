import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';
import { useAdminSelectMovies } from '../../../apis/admin/queries';
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
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import AdminEditModal from '../modal/AdminEditModal';

function MovieManagement() {
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');

  const { isOpen, openModal, setModalData } = useAdminModalStore();
  const { data, isLoading, error } = useAdminSelectMovies({
    page: currentPage,
    size: moviesPerPage,
    searchTerm: submittedTerm,
  });

  const movies = data?.content || [];
  const totalPages = data?.totalPages || 1;

  // 클라이언트 필터링
  const filteredMovies = submittedTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(submittedTerm.toLowerCase())
      )
    : movies;

  // 검색 결과 기반 페이지네이션 계산
  const totalFilteredPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

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

  const handleEdit = (movie) => {
    setModalData({
      id: movie.id,
      title: movie.title,
      genre: movie.genre,
      releaseDate: movie.releaseDate,
      likes: movie.likeCounts,
    });
    openModal();
  };

  const handleDelete = (movie) => {
    alert(`"${movie.title}" 삭제 요청`);
  };

  // 디버깅: 검색어 및 API 응답 로깅
  useEffect(() => {
    console.log("검색어:", submittedTerm);
    console.log("API 응답:", data);
  }, [submittedTerm, data]);

  // 로딩 상태 처리
  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;
  if (!isLoading && displayedMovies.length === 0)
    return <div>검색 결과가 없습니다.</div>;

  return (
    <>
      <AdminEditModal isOpen={isOpen} />
      <S.Container>
        {/* 검색 창 */}
        <S.SearchBox>
          <S.SearchBarTextField
            variant="outlined"
            fullWidth
            label="영화 검색"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </S.SearchBox>

        {/* 영화 테이블 */}
        <S.TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <S.TableHeadCell>제목</S.TableHeadCell>
                <S.TableHeadCell>좋아요 수</S.TableHeadCell>
                <S.TableHeadCell>평점</S.TableHeadCell>
                <S.TableHeadCell>장르</S.TableHeadCell>
                <S.TableHeadCell>개봉일</S.TableHeadCell>
                <S.TableHeadCell>수정 / 삭제</S.TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedMovies.map((movie) => (
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
                    <S.ModeEditTwoToneIcon onClick={() => handleEdit(movie)} />
                    <S.DeleteIcon onClick={() => handleDelete(movie)} />
                  </S.TableBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </S.TableContainer>

        {/* 페이지네이션 */}
        <S.Pagination
          count={submittedTerm ? totalFilteredPages : totalPages}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
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
