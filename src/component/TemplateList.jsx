import React from "react";
import { useNavigate } from "react-router-dom";
import TemplateCardList from "./TemplateCardList";


const TemplateList = () => {
  const navigate = useNavigate();
 
  const handleAddNewTemplate = () => {
    navigate("/add-template");
  };
  return (
    <>
      {/* Main Template Area */}
      <div className="flex-1 bg-white">
        <h2 className="text-3xl font-semibold mb-4">Email Templates</h2>

        {/* Search + Add button */}
        <div className="flex justify-between mr-6 mb-6">
          <input
            type="text"
            placeholder="Search templates..."
            className="border border-black rounded-lg px-4 py-2 w-1/3"
          />

          <button
            onClick={handleAddNewTemplate}
            className="px-4 py-2 bg-blue-300 border border-black rounded-lg"
          >
            + Add New Template
          </button>
        </div>

        {/* Templates Grid */}
       <TemplateCardList />
      </div>
    </>
  );
};

export default TemplateList;
