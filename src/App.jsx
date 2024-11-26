import router from './routes/router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import UserModal from './components/Common/modal/userModal';
import { QueryClient, QueryClientProvider, ReactQueryDevtools } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserModal />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
