import { Outlet } from 'react-router-dom';
import React from 'react';

const Header = React.lazy(() => import('../Common/header/Header'));

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
