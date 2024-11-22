import React from 'react';
import styled from 'styled-components';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import MovieManagement from '../components/Common/admin/MovieManagement';
import AddNewMovie from '../components/Common/admin/AddMovie';
import LikeManagement from '../components/Common/admin/LikeManagement';
import usePageStore from '../store/admin/usePagestore';
import { AdminPageWrapper, PageContent } from '../styles/admin/adminpage';

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