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
        query: submittedTerm,
    });

    const movies = data?.content || [];
    const totalPages = data?.totalPages || 1;

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setSubmittedTerm(searchTerm.trim());
            setCurrentPage(1);
        }
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleEdit = (movie) => {
        setModalData({
          id: movie.id,
          title: movie.title,
          genre: movie.genre,
          releaseDate: movie.releaseDate,
          likes: movie.likeCounts,
          page: currentPage, // 현재 페이지 추가
          query: submittedTerm, // 현재 검색어 추가
        });
        openModal();
      };

    const handleDelete = (movie) => {
        alert(`"${movie.title}" 삭제 요청`);
    };

    useEffect(() => {
        console.log('검색어:', submittedTerm);
        console.log('API 응답:', data);
    }, [submittedTerm, data]);

    if (isLoading) return <div>로딩 중...</div>;
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
                        onKeyDown={handleSearch}
                    />
                </S.SearchBox>

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
                            {movies.map((movie) => (
                                <TableRow key={movie.id}>
                                    <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                                    <S.TableBodyCell>{movie.likeCounts || 0}</S.TableBodyCell>
                                    <S.TableBodyCell>
                                        {movie.averageRating !== null &&
                                        movie.averageRating !== undefined
                                            ? movie.averageRating.toFixed(2)
                                            : 'N/A'}
                                    </S.TableBodyCell>
                                    <S.TableBodyCell>
                                        {movie.genreTypes?.length > 0
                                            ? movie.genreTypes.join(', ')
                                            : '미정'}
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
                <S.Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
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
