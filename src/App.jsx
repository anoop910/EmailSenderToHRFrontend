import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./page/Home";
import SendEmail from "./page/SendEmail";
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/send-email" element={<SendEmail />} />
      </Routes>
    
  );
}

export default App;
