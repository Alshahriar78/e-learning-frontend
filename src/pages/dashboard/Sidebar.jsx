import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "hover:bg-blue-600 hover:text-white"
     }`;

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg p-4 transform 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Dashboard
        </h2>

        <nav className="space-y-2">
           <NavLink to="profile" className={linkClass}>Profile Information</NavLink>
          <NavLink to="profileUpdate" className={linkClass}>Profile Edit</NavLink>
          <NavLink to="courses" className={linkClass}>My Courses</NavLink>
          <NavLink to="products" className={linkClass}>My Products</NavLink>
          <NavLink to="certificates" className={linkClass}>Certificates</NavLink>

          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 rounded bg-red-500 text-white mt-4"
          >
            Logout
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
