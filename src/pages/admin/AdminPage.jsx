import AdminHeaderComponent from '../../components/common/header/AdminHeader';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import MovieManagement from '../../components/common/admin/MovieManagement';
import AddNewMovie from '../../components/common/admin/AddMovie';
import LikeManagement from '../../components/common/admin/LikeManagement';
import MovieTop from '../../components/common/admin/MovieTop';
import usePageStore from '../../store/admin/usePagestore';

function AdminPage() {
  const { currentPage, setPage } = usePageStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'movieManagement':
        return <MovieManagement />;
      case 'addNewMovie':
        return <AddNewMovie />;
      case 'likeManagement':
        return <LikeManagement />;
      case 'movieTop':
        return <MovieTop />;
      default:
        return <MovieManagement />;
    }
  };

  return (
    <S.Page>
      <AdminHeaderComponent
        onMovieManagementClick={() => setPage('movieManagement')}
        onAddNewMovieClick={() => setPage('addNewMovie')}
        onLikeManagementClick={() => setPage('likeManagement')}
        onMovieTopClick={() => setPage('movieTop')}
      />
      <S.Content>{renderPage()}</S.Content>
    </S.Page>
  );
}

export default AdminPage;
const S = {
  Page: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }),
  Content: styled(Box)({
    flex: 1,
    padding: '2rem 0',
    marginTop: '4rem',
  })
};