import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import TemplateCard from "../component/TemplateCard";
import DashboardLayout from "../Layout/DashboardLayout";

const TemplatesPage = () => {
  const templates = [
    { id: 1, title: "Welcome Email" },
    { id: 2, title: "Offer Email" },
    { id: 3, title: "Newsletter" },
    { id: 4, title: "Verification Email" },

  ];

  return (
    <DashboardLayout>
   
        {/* Main Template Area */}
        <div className="flex-1 bg-white">
          <h2 className="text-3xl font-semibold mb-4">Email Templates</h2>

          {/* Search + Add button */}
          <div className="flex justify-between mb-6">
            <input
              type="text"
              placeholder="Search templates..."
              className="border border-black rounded-lg px-4 py-2 w-1/3"
            />

            <button className="px-4 py-2 bg-blue-300 border border-black rounded-lg">
              + Add New Template
            </button>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-4 gap-6">
            {templates.map((t) => (
              <TemplateCard
                key={t.id}
                title={t.title}
                onEdit={() => console.log("Edit", t.id)}
                onDelete={() => console.log("Delete", t.id)}
                onUse={() => console.log("Use", t.id)}
              />
            ))}
          </div>
        </div>
     
   
    </DashboardLayout>
  );
};

export default TemplatesPage;
