import router from './routes/router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import UserModal from './components/Common/modal/userModal';
function App() {
  return (
    <>
      <GlobalStyle />
      <UserModal /> 
      <RouterProvider router={router} />
    </>
  );
}

export default App;
