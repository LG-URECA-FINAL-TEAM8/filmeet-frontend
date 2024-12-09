import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { lightTheme } from '../../../styles/themes';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { movies } from '../../../data/movies';

function MovieTop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  // JSON 데이터를 기반으로 필터링
  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered.slice(0, 10));
  }, [searchTerm]);

  // 검색어 변경 핸들러
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <S.Container>
      {/* 검색 창 */}
      <S.SearchBox>
        <S.SearchBarTextField
          variant="outlined"
          fullWidth
          label="영화 검색"
          value={searchTerm}
          onChange={handleSearch}
        />
      </S.SearchBox>

      {/* 테이블 */}
      <S.TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <S.TableHeadCell>순위</S.TableHeadCell>
              <S.TableHeadCell>제목</S.TableHeadCell>
              <S.TableHeadCell>평점</S.TableHeadCell>
              <S.TableHeadCell>장르</S.TableHeadCell>
              <S.TableHeadCell>개봉일</S.TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMovies.map((movie, index) => (
              <TableRow key={movie.id}>
                <S.TableBodyCell>{index + 1}</S.TableBodyCell>
                <S.TableBodyCell>{movie.title}</S.TableBodyCell>
                <S.TableBodyCell>
                  {movie.averageRating !== null && movie.averageRating !== undefined
                    ? movie.averageRating.toFixed(2)
                    : 'N/A'}
                </S.TableBodyCell>
                <S.TableBodyCell>
                  {movie.genreTypes?.length > 0
                    ? movie.genreTypes.join(', ')
                    : '미정'}
                </S.TableBodyCell>
                <S.TableBodyCell>{movie.releaseDate}</S.TableBodyCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.TableContainer>
    </S.Container>
  );
}

export default MovieTop;

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
};
