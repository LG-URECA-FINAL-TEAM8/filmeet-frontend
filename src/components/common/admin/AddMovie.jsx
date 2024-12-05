import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { useState, useEffect, useMemo } from 'react';
import { useAdminRegisterMovies, useAdminSearchMovies } from '../../../apis/admin/queries';
import tableHeaders from '../../../data/admintableheaders';
import usePaginationStore from '../../../store/admin/usePaginationStore';
import useSelectionStore from '../../../store/admin/useSelectionStore';
import { lightTheme } from '../../../styles/themes';
import AvgRatingBadge from './AvgRatingBadge';

function AddMovie() {
  const { currentPage, moviesPerPage, setCurrentPage } = usePaginationStore();
  const { selectedMovies, addMovie, removeMovie, clearSelection } = useSelectionStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedTerm, setSubmittedTerm] = useState('');
  const [isAllSelected, setIsAllSelected] = useState(false);
  const { data, isLoading: isSearching, error } = useAdminSearchMovies(submittedTerm);
  const { mutate: registerMovies, isLoading: isRegistering } = useAdminRegisterMovies();

  const movies = useMemo(() => {
    return (
      data?.data.map((movie) => ({
        id: movie.titleEng || movie.title,
        title: movie.title,
        titleEng: movie.titleEng || "",
        repRlsDate: movie.repRlsDate || "미정",
        staffs: movie.staffs || [],
        nation: movie.nation || "",
        plots: movie.plots || [],
        runtime: movie.runtime || "",
        rating: movie.rating || "N/A",
        genre: movie.genre || "N/A",
        posters: movie.posters || [],
      })) || []
    );
  }, [data]);


  const totalMovies = movies.length;

  useEffect(() => {
    setIsAllSelected(selectedMovies.length === totalMovies && totalMovies > 0);
  }, [selectedMovies, totalMovies]);

  const handleSearch = () => {
    if (!searchTerm.trim()) return alert('검색어를 입력하세요.');
    setSubmittedTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      clearSelection();
      setIsAllSelected(false); // 명시적으로 해제 상태로 설정
    } else {
      movies.forEach((movie) => addMovie(movie.id));
      setIsAllSelected(true); // 명시적으로 전체 선택 상태로 설정
    }
  };

  useEffect(() => {
  const allSelected = movies.length > 0 && movies.every((movie) => selectedMovies.includes(movie.id));
  setIsAllSelected(allSelected);
}, [selectedMovies, movies]);

  const handleCheckboxChange = (movieId) => {
    selectedMovies.includes(movieId) ? removeMovie(movieId) : addMovie(movieId);
  };

  const handleRegister = () => {
    const selectedMovieData = currentMovies.filter((movie) =>
      selectedMovies.includes(movie.id)
    );
    if (selectedMovieData.length === 0) {
      alert('등록할 영화를 선택해주세요.');
      return;
    }
    registerMovies(selectedMovieData, {
      onSuccess: () => {
        alert(`${selectedMovieData.length}개의 영화가 성공적으로 등록되었습니다.`);
        clearSelection();
      },
      onError: (error) => alert(`등록 실패: ${error.message}`),
    });
  };
  const currentMovies = useMemo(() => {
    const indexOfLast = currentPage * moviesPerPage;
    const indexOfFirst = indexOfLast - moviesPerPage;
    return movies.slice(indexOfFirst, indexOfLast);
  }, [movies, currentPage, moviesPerPage]);

  return (
    <S.Container>
      <S.SearchBox>
        <TextField
          fullWidth
          label="영화 검색(영화 제목, 감독명, 배우명)"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>검색</Button>
        <Button variant="outlined" onClick={() => setSearchTerm('')}>초기화</Button>
      </S.SearchBox>

      <S.TableContainer component={Paper}>
        {isSearching ? (
          <S.NoResults>검색 중...</S.NoResults>
        ) : error ? (
          <S.NoResults>에러 발생: {error.message}</S.NoResults>
        ) : totalMovies > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <S.TableHeadCell>
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={
                      selectedMovies.length > 0 && selectedMovies.length < totalMovies
                    }
                    onChange={handleSelectAll}
                  />
                </S.TableHeadCell>
                {Object.values(tableHeaders.addMovie).map((header) => (
                  <S.TableHeadCell key={header}>{header}</S.TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentMovies.map((movie) => (
                <TableRow key={movie.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedMovies.includes(movie.id)}
                      onChange={() => handleCheckboxChange(movie.id)}
                    />
                  </TableCell>
                  <TableCell>{movie.title}</TableCell>
                  <TableCell>
                    <AvgRatingBadge count={movie.rating} />
                  </TableCell>
                  <TableCell>{movie.genre}</TableCell>
                  <TableCell>{movie.releaseDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <S.NoResults>검색 결과가 없습니다.</S.NoResults>
        )}
      </S.TableContainer>

      <Pagination
        count={Math.ceil(totalMovies / moviesPerPage)}
        page={currentPage}
        onChange={(e, page) => setCurrentPage(page)}
      />

      <Button
        variant="contained"
        onClick={handleRegister}
        disabled={!selectedMovies.length || isRegistering}
      >
        {isRegistering ? '등록 중...' : '등록'}
      </Button>
    </S.Container>
  );
}

export default AddMovie;

const S = {
  Container: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
  }),
  SearchBox: styled(Box)({
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    alignItems: 'center',
    width: '30%',
  }),
  TableContainer: styled(TableContainer)({
    maxWidth: '1300px',
    width: '100%',
  }),
  TableHeadCell: styled(TableCell)({
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }),
  NoResults: styled('div')({
    padding: '2rem',
    textAlign: 'center',
    color: lightTheme.color.fontGray,
  }),
};
