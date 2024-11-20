import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import MyPage from '../pages/MyPage';
import RatingsPage from '../pages/RatingsPage';
import CommentsPage from '../pages/CommentsPage';
import CollectionsPage from '../pages/CollectionsPage';

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
        children: [
          {
            path: "ratings",
            element: <RatingsPage />,
          },
          {
            path: "comments",
            element: <CommentsPage />,
          },
          {
            path: "collections",
            element: <CollectionsPage />,
          },
        ]
      }
    ],
  },
]);

export default router;
