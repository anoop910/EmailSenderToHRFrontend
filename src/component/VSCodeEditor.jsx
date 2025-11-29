import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { autocompletion } from "@codemirror/autocomplete";
import { bracketMatching } from "@codemirror/language";
import { closeBrackets } from "@codemirror/autocomplete";

export default function SingleEditor() {
  // Initial boilerplate
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <style>
    body { font-family: Arial; text-align: center; }
    h1 { color: teal; }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>Write your HTML, CSS, JS here!</p>
  <script>
    console.log("Hello from JS!");
  </script>
</body>
</html>`);

  const [srcDoc, setSrcDoc] = useState("");

  // Update iframe preview automatically
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(code);
    }, 300);

    return () => clearTimeout(timeout);
    
  }, [code]);

  
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Single Editor */}
      <div style={{ width: "50%", padding: "10px", overflowY: "scroll", marginBottom: "10px", backgroundColor: "#1e1e1e" }}>
        <h3 style={{ color: "white" }}>HTML + CSS + JS Editor</h3>
        <CodeMirror
          value={code}
          height="100%"
          theme={oneDark}
          extensions={[html(), autocompletion(), bracketMatching(), closeBrackets()]}
          onChange={(value) => setCode(value)}
        />
      </div>

      {/* Live Preview */}
      <div style={{ width: "50%", borderLeft: "2px solid #333", marginBottom: "10px" }}>
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          style={{ border: "none", background: "white" }}
        />
      </div>
    </div>
  );
}
