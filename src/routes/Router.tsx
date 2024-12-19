
import { Page404 } from "@/pages/payments/404/Page404";
import { EditPayment } from "@/pages/payments/edit/EditPayment";
import { Payments } from "@/pages/payments/home/Payments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppRoutes = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Payments />} />
    <Route path="/edit/:id" element={<EditPayment />} errorElement={<Page404 />}/>
   </Routes>
  </Router>
 );
};

export default AppRoutes;
