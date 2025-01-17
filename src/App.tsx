import { Toaster } from "@/components/ui/sonner";
import { PaymentsProvider } from "./global/global.payments";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/Router";
const queryClient = new QueryClient();
function App() {
 return (
  <>
   <div className="min-h-screen flex">
    <PaymentsProvider>
     <QueryClientProvider client={queryClient}>
      <AppRoutes />
     </QueryClientProvider>
    </PaymentsProvider>
    <Toaster />
   </div>
  </>
 );
}

export default App;
