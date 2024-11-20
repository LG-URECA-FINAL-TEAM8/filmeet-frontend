import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminMoviePage from '../pages/AdminMoviePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Main />,
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
