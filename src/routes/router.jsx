import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import MyPage from '../pages/mypage/MyPage';
import RatingsPage from '../pages/mypage/ratingpage/RatingsPage';
import CommentsPage from '../pages/mypage/CommentsPage';
import MovieRatingsPage from '../pages/mypage/ratingpage/MovieRatingsPage';
import AllMoviesByRatingsPage from '../pages/mypage/ratingpage/AllMoviesByRatingsPage';
import CollectionsPage from '../pages/mypage/collectionpage/CollectionsPage';
import CollectionCreatePage from '../pages/mypage/collectionpage/CollectionCreatePage';
import CollectionDetailPage from '../pages/mypage/collectionpage/CollectionDetailPage';
import CollectionEditPage from '../pages/mypage/collectionpage/CollectionEditPage';import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
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
    ],
  },
]);

export default router;
