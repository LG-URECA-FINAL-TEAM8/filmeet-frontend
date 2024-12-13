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
  AlarmHistoryPage: () => import('../pages/header/AlarmHistoryPage'),
  StarRatingPage: () => import('../pages/header/StarRatingPage'),
  MovieDetail: () => import('../pages/movieDetail/MovieDetail'),
  MovieCommentAll: () => import('../pages/movieDetail/MovieCommentDetail'),
  Bin: () => import('../components/common/bin/Bin'),
};

const createLazyComponent = (importFn) => {
  const LazyComponent = React.lazy(importFn);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
};
//next는 빌드 파일 자체가 페이지 별로 나눠서 생성이 됨. 리액트는 한번에 묶이기 때문에 파일 자체 크기가 큼 그러다 보니
//로딩이 오래걸리고 이런 현상이 발생할 수 있음
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
      { path: 'notifications', element: createLazyComponent(pageComponents.AlarmHistoryPage) },
      { path: 'bin', element: createLazyComponent(pageComponents.Bin) },
      { path: 'error', element: <ErrorPage /> },
      { path: 'review', element: createLazyComponent(pageComponents.StarRatingPage) },
      { path: 'moviedetail/:id', element: createLazyComponent(pageComponents.MovieDetail) },
      {
        path: 'moviedetail/:id/moviecommentAll',
        element: createLazyComponent(pageComponents.MovieCommentAll),
      },
      {
        path: '/moviedetail/comments/:reviewId',
        element: createLazyComponent(pageComponents.CommentsDetailPage),
      },
    ],
    errorElement: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
