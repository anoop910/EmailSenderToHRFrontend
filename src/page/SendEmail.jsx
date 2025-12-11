import React, { useState } from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import CodeEditor from "../component/CodeEditor";
import { emailService } from "../Service/emailService";
import Loader from "../component/Loader";
import TemplateList from "../component/templateList";
import TemplateCardList from "../component/TemplateCardList";
import {
  deleteTemplateService,
  getTemplateByIdService,
} from "../Service/templateService";

const SendEmail = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [bcc, setBcc] = useState("");
  const [cc, setCc] = useState("");
  const [attachments, setAttachments] = useState(null);
  const [subject, setSubject] = useState("");
  const [templateList, setTemplateList] = useState(false);
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
    toEmail: email,
    subject: subject,
    bcc: bcc,
    cc: cc,
    body: code,
  };
 

  const formData = new FormData();

  // Append JSON as a string
  formData.append("sendEmailReq", JSON.stringify(data));
  ;
  

  // Append file
  formData.append("file", attachments);

  const handleSendEmail = () => {
    setLoading(true);
    console.log(attachments);
    

    emailService(formData)
      .then((res) => {
        console.log("Email sent successfully:", res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setLoading(false);
      });
  };

  const handleUseTemplate = () => {
    setTemplateList(true);
  };

  const handletemplateselect = (id) => {
    getTemplateByIdService(id)
      .then((data) => {
        setCode(data.templateCode);
      })
      .catch((error) => {
        console.error("Failed to fetch template by id:", error);
      });
  };

  const handletemplateEdit = (id) => {
    getTemplateByIdService(id)
      .then((data) => {
        setCode(data.templateCode);
      })
      .catch((error) => {
        console.error("Failed to fetch template by id:", error);
      });
  };

  const deleteTemplate = (id) => {
    setTemplateList(false);
    deleteTemplateService(id)
      .then((data) => {
        console.log("Template deleted successfully:", data);
        handleUseTemplate();
      })
      .catch((error) => {
        console.error("Failed to delete template:", error);
      });
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold mb-4">Send Email</h1>

      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <label className="block mb-2 font-semibold">To:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter To email"
          className="w-full p-3 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">BCC:</label>
        <input
          type="email"
          value={bcc}
          onChange={(e) => setBcc(e.target.value)}
          placeholder="Enter Bcc email"
          className="w-full p-3 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">CC:</label>
        <input
          type="email"
          value={cc}
          onChange={(e) => setCc(e.target.value)}
          placeholder="Enter CC email"
          className="w-full p-3 border rounded mb-4"
        />
        <label className="block mb-2 font-semibold">Attachments:</label>
        <input
          type="file"
          accept="application/pdf"
          id="#inputFile"
          onChange={(e) => setAttachments(e.target.files[0])}
          className="w-full p-3 border rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Subject:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email subject"
          className="w-full p-3 border rounded mb-4"
        />
      </div>
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <button
          onClick={handleUseTemplate}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mb-5"
        >
          Use Template
        </button>
        {templateList ? (
          <TemplateCardList
            onSelect={handletemplateselect}
            onDelete={deleteTemplate}
            onEdit={handletemplateEdit}
          />
        ) : null}
      </div>

      <h2 className="text-xl font-semibold mb-3">HTML Body</h2>
      <CodeEditor value={code} onChange={setCode} />

      <button
        onClick={handleSendEmail}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        {loading ? <Loader /> : "Send Email"}
      </button>
    </DashboardLayout>
  );
};

export default SendEmail;
