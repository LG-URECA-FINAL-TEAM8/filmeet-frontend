import router from './routes/router';
import './App.css';
import "./styles/_vanishOut.scss";
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes';
import PushNotification from './components/firebase/PushNotification';
function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={lightTheme}>
          <PushNotification />
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
