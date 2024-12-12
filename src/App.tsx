import { Aside } from "./components/Aside/Aside";
import { Toaster } from "./components/ui/toaster";
import { PaymentsProvider } from "./global/global.payments";
import "./index.css";

import AppRoutes from "./routes/Router";

function App() {
 return (
  <>
   <div className="min-h-screen flex">
    <PaymentsProvider>
     <Aside />
     <AppRoutes />
    </PaymentsProvider>
    <Toaster />
   </div>
  </>
 );
}

export default App;
