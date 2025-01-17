import { Aside } from "@/components/Aside/Aside";
import { Page404 } from "@/pages/payments/404/Page404";
import { EditPayment } from "@/pages/payments/edit/editPayment";
import { Payments } from "@/pages/payments/home/payments";
import { Posts } from "@/pages/posts/posts";
import { Checkone } from "@/pages/user/form/checkone";
import { Checkout } from "@/pages/user/form/checkout";
import { Checktwo } from "@/pages/user/form/checktwo";
import { User } from "@/pages/user/user";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppRoutes = () => {
 return (
  <Router>
   <Aside />
   <Routes>
    <Route path="/" element={<Payments />} />
    <Route
     path="/edit/:id"
     element={<EditPayment />}
     errorElement={<Page404 />}
    />
    <Route path="/posts" element={<Posts />} />
    <Route path="/user" element={<User />}>
     <Route path="checkone" element={<Checkone />} />
     <Route path="checktwo" element={<Checktwo />} />
     <Route path="checkout" element={<Checkout />} />
    </Route>
   </Routes>
  </Router>
 );
};

export default AppRoutes;
