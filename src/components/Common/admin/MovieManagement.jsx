import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useMovieStore from '../../../store/admin/useMovieStore';
import moviesData from '../../../data/movies.json';
import useAdminModalStore from '../../../store/modal/useAdminModalStore';
import AdminEditModal from '../modal/AdminEditModal';

function MovieManagement() {
  const { movies, setMovies } = useMovieStore();
  const { isModalOpen, openModal, closeModal, selectedMovie } = useAdminModalStore();

  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const handleSearch = (term) => {
    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleEdit = (movie) => {
    openModal(movie);
  };

  const handleDelete = (movie) => {
    alert(`"${movie.title}" 삭제 요청`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3 }}>
      {/* 제목 */}
      <Typography variant="h4" gutterBottom>
        영화 관리
      </Typography>

      {/* 검색 바 */}
      <Box sx={{ width: '100%', maxWidth: '410px', mb: 1,ml:50  }}>
        <TextField
          fullWidth
          label="영화 검색"
          variant="outlined"
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            height: '50px', // 높이를 50px로 설정
            '& .MuiInputBase-root': {
              height: '50px', // 내부 Input 영역의 높이를 설정
            },
          }}
        />
      </Box>

      {/* 테이블 */}
      <TableContainer component={Paper} sx={{ maxWidth: '1303px', width: '100%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>영화 이름</TableCell>
              <TableCell>좋아요 수</TableCell>
              <TableCell>댓글 수</TableCell>
              <TableCell>평균 평점</TableCell>
              <TableCell>장르</TableCell>
              <TableCell>개봉일</TableCell>
              <TableCell align="center">액션</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {movies.map((movie, index) => (
              <TableRow key={index}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.likes || 0}</TableCell>
                <TableCell>{movie.comments || 0}</TableCell>
                <TableCell>{movie.rating || 'N/A'}</TableCell>
                <TableCell>{movie.genre || 'N/A'}</TableCell>
                <TableCell>{movie.releaseDate || 'N/A'}</TableCell>
                <TableCell align="center">
                  <Button
                    color="primary"
                    onClick={() => handleEdit(movie)}
                    sx={{ mr: 1 }}
                  >
                    수정
                  </Button>
                  <Button color="error" onClick={() => handleDelete(movie)}>
                    삭제
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 수정 모달 */}
      {isModalOpen && <AdminEditModal movie={selectedMovie} onClose={closeModal} />}
    </Box>
  );
}

export default MovieManagement;