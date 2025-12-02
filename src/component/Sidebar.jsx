import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white left-0 top-0 pt-8 px-4">
      <nav className="flex flex-col gap-4">

        <NavLink className="hover:bg-gray-700 p-3 rounded" to="/">Dashboard</NavLink>
        <NavLink className="hover:bg-gray-700 p-3 rounded" to="/send-email">
          Send Email
        </NavLink>
        <NavLink className="hover:bg-gray-700 p-3 rounded" to="/templates">
          Templates
        </NavLink>
        <NavLink className="hover:bg-gray-700 p-3 rounded" to="/emails">
          Emails
        </NavLink>
        <NavLink className="hover:bg-gray-700 p-3 rounded" to="/users">
          Users
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;
