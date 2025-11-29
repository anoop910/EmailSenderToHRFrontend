import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="mt-4 w-full px-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
