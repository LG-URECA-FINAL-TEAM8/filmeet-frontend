import React, { useState } from 'react';
import SearchBar from '../components/Common/admin/SearchBar';
import List from '../components/Common/admin/List';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import { AdminPage } from '../styles/admin/adminmovie';

function AdminMoviesPage() {
  const [movies, setMovies] = useState([
    { title: '영화1' },
    { title: '영화2' },
    { title: '영화3' },
    { title: '영화4' },
    { title: '영화5' },
    { title: '영화6' },
    { title: '영화7' },
    { title: '영화1' },
    { title: '영화2' },
    { title: '영화3' },
    { title: '영화4' },
    { title: '영화5' },
    { title: '영화6' },
    { title: '영화7' },
    { title: '영화1' },
    { title: '영화2' },
    { title: '영화3' },
    { title: '영화4' },
    { title: '영화5' },
    { title: '영화6' },
    { title: '영화7' },
    { title: '영화2' },
    { title: '영화3' },
    { title: '영화4' },
    { title: '영화5' },
    { title: '영화6' },
    { title: '영화7' },
    { title: '영화2' },
    { title: '영화3' },
    { title: '영화4' },
    { title: '영화5' },
    { title: '영화6' },
    { title: '영화7' },
  ]);

  function handleSearch() {

  }

  return (
    <AdminPage>
      <AdminHeaderComponent text="등록된 영화 목록" fontSize="1.5rem" top="50%" left="20%" />
      <SearchBar onSearch={handleSearch} />
      <List movies={movies} />
    </AdminPage>
  );
}

export default AdminMoviesPage;
