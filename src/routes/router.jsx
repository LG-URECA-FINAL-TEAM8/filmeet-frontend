import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AdminLoginPage from '../pages/AdminLoginPage';
import MyPage from '../pages/mypage/MyPage';
import RatingsPage from '../pages/mypage/ratingpage/RatingsPage';
import CommentsPage from '../pages/mypage/commentpage/CommentsPage';
import MovieRatingsPage from '../pages/mypage/ratingpage/MovieRatingsPage';
import AllMoviesByRatingsPage from '../pages/mypage/ratingpage/AllMoviesByRatingsPage';
import GenrePage from '../pages/generepage';
import FollowersPage from '../pages/followpage/FollowerPage';
import FollowerPage from '../pages/followpage/FollowerPage';
import FollowingPage from '../pages/followpage/FollowingPage';
import AlarmHistoryPage from '../pages/AlarmHistoryPage';
import CommentsDetailPage from '../pages/mypage/commentpage/CommentsDetailPage';import CollectionsPage from '../pages/mypage/collectionpage/CollectionsPage';
import CollectionCreatePage from '../pages/mypage/collectionpage/CollectionCreatePage';
import CollectionDetailPage from '../pages/mypage/collectionpage/CollectionDetailPage';
import CollectionEditPage from '../pages/mypage/collectionpage/CollectionEditPage';import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

import AdminPage from '../pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
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
        path: 'mypage/comments/:commentId',
        element: <CommentsDetailPage />,
      },
      {
        path: 'mypage/collections',
        element: <CollectionsPage />,
      },
      {
        path: 'mypage/collections/create',
        element: <CollectionCreatePage />,
      },
      {
        path: 'mypage/collections/:collectionId',
        element: <CollectionDetailPage />,
      },
      {
        path: 'mypage/collections/:collectionId/edit',
        element: <CollectionEditPage />,
      },
      {
        path: 'genere',
        element: <GenrePage />,
      },
      {
        path: 'followers',
        element: <FollowerPage />,
      },
      {
        path: 'followings',
        element: <FollowingPage />,
      },
      {
        path: 'alarmhistorys',
        element: <AlarmHistoryPage />,
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
