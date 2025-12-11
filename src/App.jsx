import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Home";
import SendEmail from "./page/SendEmail";
import TemplatesPage from "./page/TemplatesPage";
import AddTemplatePage from "./page/AddTemplatePage";
import EditTemplatePage from "./page/EditTemplatePage";
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/send-email" element={<SendEmail />} />
        <Route path="/templates" element={<TemplatesPage />}/>
        <Route path="/add-template" element={<AddTemplatePage />}/>
        <Route path="/edit-template" element={<EditTemplatePage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        
      </Routes>
    
  );
}

export default App;
