import { NavLink } from "react-router-dom";
import { routes } from "./aside.model";

export function Aside() {
 return (
  <aside className="min-h-screen bg-slate-50 min-w-60  p-2 border-r-2 shadow-xl">
   <div className="w-full h-36 bg-slate-500 rounded-md flex justify-center items-center">
    {" "}
    <img src="" alt="LOGO" className="" />
   </div>
   <nav className="flex flex-col items-center">
    <div className="flex flex-col mt-10 gap-y-2">
     {routes?.map((route) => {
      return (
       <NavLink
        to={`${route.route}`}
        key={route.title}
        className="text-slate-600 text-xl hover:underline hover:underline-offset-4"
       >
        {route.title}
       </NavLink>
      );
     })}
    </div>
   </nav>
  </aside>
 );
}
