import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TemplateCard from "./TemplateCard";
import DashboardLayout from "../Layout/DashboardLayout";
import { getTemplatesService } from "../Service/templateService";

const TemplateCardList = ({ onSelect = () => {}, onDelete = () => {}, onEdit = () => {} }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    getTemplatesService()
      .then((data) => {
        setTemplates(data);
        console.log(data);
        
      })
      .catch((error) => {
        console.error("Failed to fetch templates:", error);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {templates.map((t) => (
          <TemplateCard
            key={t.id}
            title={t.title}
            onEdit={() => onEdit(t.id)}
            onDelete={() => onDelete(t.id)}
            onUse={() => onSelect(t.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateCardList;
