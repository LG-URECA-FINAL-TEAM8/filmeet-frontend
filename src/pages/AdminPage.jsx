import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import MovieManagement from '../components/Common/admin/MovieManagement';
import AddNewMovie from '../components/Common/admin/AddMovie';
import LikeManagement from '../components/Common/admin/LikeManagement';
import usePageStore from '../store/admin/usePagestore';
import * as S from '../styles/admin/adminpage';

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
        return <MovieManagement pageTitle = {pageTitle} />;
      case 'addNewMovie':
        return <AddNewMovie pageTitle = {pageTitle} />;
      case 'likeManagement':
        return <LikeManagement pageTitle = {pageTitle}/>;
      default:
        return <MovieManagement pageTitle = {pageTitle}/>;
    }
  };

  return (
    <S.AdminPageWrapper>
      <AdminHeaderComponent
        text="관리자 페이지"
        onMovieManagementClick={() => setPage('movieManagement')}
        onAddNewMovieClick={() => setPage('addNewMovie')}
        onLikeManagementClick={() => setPage('likeManagement')}
      />
      <S.PageContent>{renderPage()}</S.PageContent>
    </S.AdminPageWrapper>
  );
}

export default AdminPage;