import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import CodeEditor from "../component/CodeEditor";

const SendEmail = () => {
  // Initial boilerplate
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
  

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold mb-4">Send Email</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <label className="block mb-2 font-semibold">To:</label>
        <input
          type="email"
          placeholder="Enter user email"
          className="w-full p-3 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Subject:</label>
        <input
          type="text"
          placeholder="Email subject"
          className="w-full p-3 border rounded mb-4"
        />
      </div>

      <h2 className="text-xl font-semibold mb-3">HTML Body</h2>
      <CodeEditor value={code} onChange={setCode} />

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
        Send Email
      </button>
    </DashboardLayout>
  );
};

export default SendEmail;
