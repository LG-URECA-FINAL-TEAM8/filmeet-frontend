import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MovieManagement from '../components/Common/admin/MovieManagement';
import AddNewMovie from '../components/Common/admin/AddMovie';
import LikeManagement from '../components/Common/admin/LikeManagement';
import usePageStore from '../store/admin/usePagestore';
import { lightTheme }from '../styles/themes';

function AdminPage() {
  const { currentPage, setPage } = usePageStore();

  const pageTitles = {
    movieManagement: '전체 영화 목록',
    addNewMovie: '새로운 영화 추가',
    likeManagement: '좋아요 관리',
  };

  const renderPage = () => {
    const pageTitle = pageTitles[currentPage] || '관리자 페이지';

    switch (currentPage) {
      case 'movieManagement':
        return <MovieManagement pageTitle={pageTitle} />;
      case 'addNewMovie':
        return <AddNewMovie pageTitle={pageTitle} />;
      case 'likeManagement':
        return <LikeManagement pageTitle={pageTitle} />;
      default:
        return <MovieManagement pageTitle={pageTitle} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 헤더 */}
      <AppBar position="static" sx={{ backgroundColor: '#F4F4F4' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            관리자 페이지
          </Typography>
          <Button color="inherit" onClick={() => setPage('movieManagement')}>
            전체 영화 목록
          </Button>
          <Button color="inherit" onClick={() => setPage('addNewMovie')}>
            새로운 영화 추가
          </Button>
          <Button color="inherit" onClick={() => setPage('likeManagement')}>
            좋아요 관리
          </Button>
        </Toolbar>
      </AppBar>

      {/* 페이지 콘텐츠 */}
      <Container sx={{ flex: 1, py: 3 }}>
        {renderPage()}
      </Container>
    </Box>
  );
}

export default AdminPage;