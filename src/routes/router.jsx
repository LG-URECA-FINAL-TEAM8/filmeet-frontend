import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AdminLoginPage from '../pages/AdminLoginPage';
import MyPage from '../pages/mypage/MyPage';
import RatingsPage from '../pages/mypage/ratingpage/RatingsPage';
import CommentsPage from '../pages/mypage/CommentsPage';
import CollectionsPage from '../pages/mypage/CollectionsPage';
import MovieRatingsPage from '../pages/mypage/ratingpage/MovieRatingsPage';
import AllMoviesByRatingsPage from '../pages/mypage/ratingpage/AllMoviesByRatingsPage';

import AdminPage from '../pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'mypage/ratings',
        element: <RatingsPage />,
      },
      {
        path: 'mypage/contents/movies/ratings',
        element: <MovieRatingsPage />,
      },
      {
        path: 'mypage/contents/movies/ratings/:rating',
        element: <AllMoviesByRatingsPage />,
      },
      {
        path: 'mypage/comments',
        element: <CommentsPage />,
      },
      {
        path: 'mypage/collections',
        element: <CollectionsPage />,
      },
    ],
  },
  {
    path: 'adminlogin',
    element: <AdminLoginPage />,
  },
  {
    path: 'admin',
    element: <AdminPage />,
  },

]);

export default router;
