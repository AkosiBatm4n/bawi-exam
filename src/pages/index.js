import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

import Table from './components/Table';

const queryClient = new QueryClient()


export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
          <Table/>
      </div>   
    </QueryClientProvider>
  
  );
}
