import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import MyPage from '../pages/MyPage';

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
      }
    ],
  },
]);

export default router;
