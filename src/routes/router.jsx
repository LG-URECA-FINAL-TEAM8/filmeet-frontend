import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import MyPage from '../pages/mypage/MyPage';
import RatingsPage from '../pages/mypage/ratingpage/RatingsPage';
import CommentsPage from '../pages/mypage/CommentsPage';
import CollectionsPage from '../pages/mypage/CollectionsPage';
import MovieRatingsPage from '../pages/mypage/ratingpage/MovieRatingsPage';

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
        path: 'mypage/comments',
        element: <CommentsPage />
      },
      {
        path: 'mypage/collections',
        element: <CollectionsPage />
      },
    ],
  },
]);

export default router;
