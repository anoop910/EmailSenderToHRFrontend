import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";

const Home = () => {
  return (
    <>
      <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">Total Users: 120</div>
        <div className="bg-white p-6 rounded-xl shadow">Emails Sent: 400</div>
        <div className="bg-white p-6 rounded-xl shadow">Drafts: 18</div>
        <div className="bg-white p-6 rounded-xl shadow">Campaigns: 5</div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-3">Recent Emails</h2>
      </div>
    </DashboardLayout>
    </>
  );
};

export default Home;
