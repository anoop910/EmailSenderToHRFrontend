import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import { autocompletion } from "@codemirror/autocomplete";
import { bracketMatching } from "@codemirror/language";
import { closeBrackets } from "@codemirror/autocomplete";

export default function CodeEditor({ value, onChange }) {
  

  const [srcDoc, setSrcDoc] = useState("");

  // Update iframe preview automatically
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(value);
    }, 300);

    return () => clearTimeout(timeout);
    
  }, [value]);

  
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Single Editor */}
      <div style={{ width: "50%", padding: "10px", overflowY: "scroll", marginBottom: "10px", backgroundColor: "#1e1e1e" }}>
        <h3 style={{ color: "white" }}>HTML + CSS + JS Editor</h3>
        <CodeMirror
          value={value}
          height="100%"
          theme={oneDark}
          extensions={[html(), autocompletion(), bracketMatching(), closeBrackets()]}
          onChange={onChange}
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
