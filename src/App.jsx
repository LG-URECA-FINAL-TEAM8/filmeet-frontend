import router from './routes/router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import UserModal from './components/Common/modal/userModal';
function App() {
  return (
    <>
      <UserModal />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
