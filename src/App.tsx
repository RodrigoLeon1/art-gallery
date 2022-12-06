import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './utils/routes.utils';
import Layout from './components/Layout/Layout';
import Footer from './components/Layout/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
