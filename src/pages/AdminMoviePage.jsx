import React, { useEffect } from 'react';
import SearchBar from '../components/Common/admin/SearchBar';
import List from '../components/Common/admin/List';
import AdminHeaderComponent from '../components/Common/header/AdminHeader';
import { AdminPage } from '../styles/admin/adminmovie';
import moviesData from '../data/moives.json';
import useMovieStore from '../store/admin/useMovieStore';

function AdminMoviesPage() {
  const movies = useMovieStore((state) => state.movies); 
  const setMovies = useMovieStore((state) => state.setMovies);
  useEffect(() => {
    setMovies(moviesData);
  }, [setMovies]);

  const headertitle = '등록된 영화 목록';

  function handleSearch() {

  }

  return (
    <AdminPage>
      <AdminHeaderComponent text={headertitle} />
      <SearchBar onSearch={handleSearch} />
      <List movies={movies} />
    </AdminPage>
  );
}

export default AdminMoviesPage;
