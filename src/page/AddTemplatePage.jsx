import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import CodeEditor from "../component/CodeEditor";
import { saveTemplateService } from "../Service/templateService";

const AddTemplatePage = () => {
  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [code, setCode] = useState(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Page</title>
      <!-- Add styles -->
      <style>
        body { font-family: Arial; text-align: center; }
        h1 { color: teal; }
      </style>
    </head>
    <!-- Body content -->
    <body>
      <h1>Hello World</h1>
      <p>Write your HTML, CSS, JS here!</p>
      <!-- Add scripts -->
      <script>
        console.log("Hello from JS!");
      </script>
    </body>
    </html>`);

  const handleSave = () => {
    if (!title || !code) {
      alert("Please fill all fields");
      return;
    }

    const templateData = {
      title: title,
      templateCode: code,
    };

    saveTemplateService(templateData)
      .then((res) => {
        console.log("Template saved successfully:", res);
        alert("Template Saved Successfully!");
      })
      .catch((error) => {
        console.error("Error saving template:", error);
        alert("Failed to save template. Please try again.");
      });
  };

  return (
    <DashboardLayout>
    <div className="w-full h-full">
      <h1 className="text-3xl font-semibold mb-4">Add New Template</h1>

      <div className="">

        {/* Template Input Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Template Details</h2>

          {/* Title Input */}
          <label className="block mb-3">
            <p className="font-medium mb-1">Template Title</p>
            <input
              type="text"
              placeholder="Enter template name"
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          {/* HTML Code Editor */}
          
          <CodeEditor
            value={code}
            onChange={setCode}
          />

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Save Template
          </button>
        </div>


       
      </div>
    </div>
    </DashboardLayout>
  );
};

export default AddTemplatePage;
