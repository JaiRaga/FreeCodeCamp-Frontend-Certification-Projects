import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [rawText, setRawText] = useState("");
  const previewCb = text => {
    setRawText(text);
  };

  return (
    <div className="App">
      <Editor previewCb={previewCb} />
      <Preview rawText={rawText} />
    </div>
  );
}

export default App;
