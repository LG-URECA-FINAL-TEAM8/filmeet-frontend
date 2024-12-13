import { 
  Box, 
  Button, 
  Checkbox, 
  Pagination, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField 
} from '@mui/material';
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
  const searchingTerm = {
    searching: "검색 중...",
    noResults: "검색 결과가 없습니다."
  };

  const movies = useMemo(() => {
    const transformedMovies = data?.data.map((movie, index) => {
      return {
        id: movie.id || `${movie.title}-${index}`,
        title: movie.title,
        titleEng: movie.titleEng || "",
        repRlsDate: movie.repRlsDate || null,
        staffs: movie.staffs || [],
        nation: movie.nation || "",
        plots: movie.plots || [],
        runtime: movie.runtime || "",
        rating: movie.rating || "N/A",
        genre: movie.genre || "N/A",
        posters: movie.posters || [],
      };
    });
    return transformedMovies || [];
  }, [data]);
  const totalMovies = movies.length;

  useEffect(() => {
    setIsAllSelected(selectedMovies.length === totalMovies && totalMovies > 0);
  }, [selectedMovies, totalMovies]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    setSubmittedTerm('');
    setTimeout(() => setSubmittedTerm(searchTerm), 0);
    setCurrentPage(1);
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      clearSelection();
    } else {
      const movieIds = movies.map((movie) => movie.id);
      movieIds.forEach((id) => addMovie(id));
    }
  };

  useEffect(() => {
    const allSelected = movies.length > 0 && movies.every((movie) => selectedMovies.includes(movie.id));
    setIsAllSelected(allSelected);
  }, [selectedMovies, movies]);

  const handleCheckboxChange = (movieId) => {
    if (selectedMovies.includes(movieId)) {
      removeMovie(movieId);
    } else {
      addMovie(movieId);
    }
  };

  const handleRegister = () => {
    const selectedMovieData = movies
      .filter((movie) => selectedMovies.includes(movie.id))
      .map((movie) => {
        return {
          title: movie.title,
          titleEng: movie.titleEng || "",
          repRlsDate: movie.repRlsDate,
          staffs: movie.staffs || [],
          nation: movie.nation || "",
          plots: movie.plots || [],
          runtime: movie.runtime || "",
          rating: movie.rating || "",
          genre: movie.genre || "",
          posters: movie.posters || [],
        };
      });
    registerMovies(selectedMovieData, {
        onSuccess: (response) => {
          const registeredCount = response?.length || selectedMovieData.length;
          alert(`${registeredCount}개의 영화가 성공적으로 등록되었습니다.`);
          clearSelection();
        },
        onError: (error) => {
          alert(`등록 실패: ${error.message}`);
        },
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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </S.SearchBox>
      <S.TableContainer component={Paper}>
        {isSearching ? (
          <S.NoResults>{searchingTerm.searching}</S.NoResults>
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
                  <TableCell>{movie.repRlsDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <S.NoResults>{searchingTerm.noResults}</S.NoResults>
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