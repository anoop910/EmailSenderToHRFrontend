import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Scroll Area */}
        <main className="mt-4 w-full px-6 overflow-y-auto h-full pb-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
