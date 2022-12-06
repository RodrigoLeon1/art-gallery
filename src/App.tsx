import Layout from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/routes.utils";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
