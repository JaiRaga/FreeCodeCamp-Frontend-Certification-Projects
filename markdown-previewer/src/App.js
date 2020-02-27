import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [rawText, setRawText] = useState("");
  const [display, setDisplay] = useState("");
  const previewCb = text => {
    setRawText(text);
  };

  const displayPreviewCb = display => {
    setDisplay(display);
  };

  return (
    <div className="App">
      <Editor previewCb={previewCb} displayPreviewCb={displayPreviewCb} />
      <Preview rawText={rawText} />
    </div>
  );
}

export default App;
