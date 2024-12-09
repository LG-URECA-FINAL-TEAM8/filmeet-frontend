import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../components/Layout/DefaultLayout';
import ErrorPage from '../pages/errorpage/ErrorPage';

//컴포넌트 동적 로딩 설정
const pageComponents = {
  Main: () => import('../pages/Main'),
  Login: () => import('../pages/auth/Login'),
  Register: () => import('../pages/auth/Register'),
  MyPage: () => import('../pages/mypage/MyPage'),
  RatingsPage: () => import('../pages/mypage/ratingpage/RatingsPage'),
  MovieRatingsPage: () => import('../pages/mypage/ratingpage/MovieRatingsPage'),
  AllMoviesByRatingsPage: () => import('../pages/mypage/ratingpage/AllMoviesByRatingsPage'),
  CommentsPage: () => import('../pages/mypage/commentpage/CommentsPage'),
  CommentsDetailPage: () => import('../pages/mypage/commentpage/CommentsDetailPage'),
  CollectionsPage: () => import('../pages/mypage/collectionpage/CollectionsPage'),
  CollectionCreatePage: () => import('../pages/mypage/collectionpage/CollectionCreatePage'),
  CollectionDetailPage: () => import('../pages/mypage/collectionpage/CollectionDetailPage'),
  CollectionEditPage: () => import('../pages/mypage/collectionpage/CollectionEditPage'),
  GenrePage: () => import('../pages/GenrePage'),
  FollowerPage: () => import('../pages/followpage/FollowerPage'),
  FollowingPage: () => import('../pages/followpage/FollowingPage'),
  AlarmHistoryPage: () => import('../pages/AlarmHistoryPage'),
  StarRatingPage: () => import('../pages/StarRatingPage'),
  AdminPage: () => import('../pages/admin/AdminPage'),
  AdminLoginPage: () => import('../pages/admin/AdminLoginPage'),
};

const createLazyComponent = (importFn) => {
  const LazyComponent = React.lazy(importFn);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
};

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: createLazyComponent(pageComponents.Main) },
      { path: 'register', element: createLazyComponent(pageComponents.Register) },
      { path: 'login', element: createLazyComponent(pageComponents.Login) },
      { path: 'mypage', element: createLazyComponent(pageComponents.MyPage) },
      { path: 'mypage/ratings', element: createLazyComponent(pageComponents.RatingsPage) },
      {
        path: 'mypage/contents/movies/ratings',
        element: createLazyComponent(pageComponents.MovieRatingsPage),
      },
      {
        path: 'mypage/contents/movies/ratings/:rating',
        element: createLazyComponent(pageComponents.AllMoviesByRatingsPage),
      },
      { path: 'mypage/comments', element: createLazyComponent(pageComponents.CommentsPage) },
      {
        path: 'mypage/comments/:commentId',
        element: createLazyComponent(pageComponents.CommentsDetailPage),
      },
      { path: 'mypage/collections', element: createLazyComponent(pageComponents.CollectionsPage) },
      {
        path: 'mypage/collections/create',
        element: createLazyComponent(pageComponents.CollectionCreatePage),
      },
      {
        path: 'mypage/collections/:collectionId',
        element: createLazyComponent(pageComponents.CollectionDetailPage),
      },
      {
        path: 'mypage/collections/:collectionId/edit',
        element: createLazyComponent(pageComponents.CollectionEditPage),
      },
      { path: 'genre', element: createLazyComponent(pageComponents.GenrePage) },
      { path: 'followers', element: createLazyComponent(pageComponents.FollowerPage) },
      { path: 'followings', element: createLazyComponent(pageComponents.FollowingPage) },
      { path: 'alarmhistorys', element: createLazyComponent(pageComponents.AlarmHistoryPage) },
      { path: 'error', element: <ErrorPage /> },
      { path: 'review', element: createLazyComponent(pageComponents.StarRatingPage) },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    children: [
      { index: true, element: createLazyComponent(pageComponents.AdminPage) },
      { path: 'login', element: createLazyComponent(pageComponents.AdminLoginPage) },
    ],
    errorElement: <ErrorPage />,
  },

];

const router = createBrowserRouter(routes);

export default router;
