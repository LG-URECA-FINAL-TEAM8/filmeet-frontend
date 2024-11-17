import { Outlet } from 'react-router-dom';
import Header from '../Common/header/Header';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default DefaultLayout;
