import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';
import DefaultLayout from '../components/Layout/DefaultLayout';
import AdminLoginPage from '../pages/AdminLoginPage';
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
