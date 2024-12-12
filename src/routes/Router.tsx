
import { EditPayment } from "@/pages/payments/edit/EditPayment";
import { Payments } from "@/pages/payments/home/Payments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppRoutes = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Payments />} />
    <Route path="/edit/:id" element={<EditPayment />} />
   </Routes>
  </Router>
 );
};

export default AppRoutes;
