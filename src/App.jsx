import React from 'react';
import router from './routes/router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
