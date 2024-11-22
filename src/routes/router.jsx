import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminMoviePage from '../pages/AdminMoviePage';
import MyPage from '../pages/mypage/MyPage';
import RatingsPage from '../pages/mypage/RatingsPage';
import CommentsPage from '../pages/mypage/CommentsPage';
import CollectionsPage from '../pages/mypage/CollectionsPage';

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
    path: 'adminmovie',
    element: <AdminMoviePage />,
  },

]);

export default router;
