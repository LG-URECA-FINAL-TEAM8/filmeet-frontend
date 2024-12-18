import { Outlet } from 'react-router-dom';
import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
const Header = React.lazy(() => import('../common/header/Header'));

const DefaultLayout = () => {
  useScrollToTop();
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
