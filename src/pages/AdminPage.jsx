import React from 'react';
import styled from 'styled-components';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import MovieManagement from '../components/Common/admin/MovieManagement';
import AddNewMovie from '../components/Common/admin/AddMovie';
import LikeManagement from '../components/Common/admin/LikeManagement';
import usePageStore from '../store/admin/usePagestore';


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
      default:
        return <MovieManagement />;
    }
  };

  return (
    <AdminPageWrapper>
      <AdminHeaderComponent
        text="관리자 페이지"
        onMovieManagementClick={() => setPage('movieManagement')}
        onAddNewMovieClick={() => setPage('addNewMovie')}
        onLikeManagementClick={() => setPage('likeManagement')}
      />
      <PageContent>{renderPage()}</PageContent>
    </AdminPageWrapper>
  );
}

export default AdminPage;

const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items : center;
  height: 100vh;
  background-color: #f8f9fa;
  position : relative;
`;

const PageContent = styled.div`
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
  width: 48%;
  justify-content: center;
  align-items: flex-start;
  overflow-y: hidden;
`;