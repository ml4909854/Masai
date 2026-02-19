import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const linkClass =
    "px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-500 hover:text-white";

  const activeClass = "bg-blue-600 text-white";

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold text-blue-600">MyBlog</h1>

      <div className="flex gap-4 font-medium text-gray-700">

        <NavLink to="/" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Home
        </NavLink>

        <NavLink to="/blog" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Blog
        </NavLink>

        {/* show only when logged in */}
        {token && (
          <NavLink to="/create" className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }>
            Create Blog
          </NavLink>
        )}

        {/* logout button */}
        {token ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }>
              Login
            </NavLink>

            <NavLink to="/signup" className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }>
              Signup
            </NavLink>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
