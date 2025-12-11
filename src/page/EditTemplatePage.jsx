import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import CodeEditor from "../component/CodeEditor";

const EditTemplatePage = () => {
  const { id } = useParams(); // get template id from URL

  const [title, setTitle] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
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

      const data = {
        title: title,
        templateCode: code,
      }

 

  const handleUpdate = () => {
    if (!title || !htmlContent) {
      alert("Fields cannot be empty");
      return;
    }

    const updatedTemplate = {
      id,
      title,
      htmlContent,
    };

    console.log("Updated:", updatedTemplate);
    alert("Template Updated Successfully!");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this template?"
    );
    if (!confirmDelete) return;

    console.log("Deleted Template ID:", id);
    alert("Template Deleted Successfully!");
  };

  if (loading) {
    return <p className="p-6 text-gray-500">Loading template...</p>;
  }

  return (
    <DashboardLayout>
    <div className="w-full h-full p-6">
      <h1 className="text-2xl font-semibold mb-6">Edit Template</h1>

      <div className="">

        {/* Left Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Template Details</h2>

          {/* Title Field */}
          <label className="block mb-5">
            <p className="font-medium mb-1">Template Title</p>
            <input
              type="text"
              placeholder="Template title"
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

         <CodeEditor htmlContent={code} setHtmlContent={setCode} />

         <button
            onClick={handleUpdate}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Update Template
          </button>
        </div>

      </div>
    </div>
    </DashboardLayout>
  );
};

export default EditTemplatePage;
